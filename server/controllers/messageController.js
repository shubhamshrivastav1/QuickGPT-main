import axios from "axios";
import Chat from "../models/Chat.js";
import User from "../models/User.js";
import openai from "../configs/openai.js";

// =====================================================
// TEXT-BASED AI CHAT MESSAGE CONTROLLER
// =====================================================

export const textMessageController = async (req, res) => {
  try {
    const userId = req.user._id;

    if (req.user.credits < 1) {
      return res.json({
        success: false,
        message: "You don't have enough credits to use this feature",
      });
    }

    const { chatId, prompt } = req.body;

    const chat = await Chat.findOne({
      userId,
      _id: chatId,
    });

    if (!chat) {
      return res.json({
        success: false,
        message: "Chat not found",
      });
    }

    // Save user message
    chat.messages.push({
      role: "user",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });

    // Gemini response
    const { choices } = await openai.chat.completions.create({
      model: "gemini-3.6-flash",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const reply = {
      ...choices[0].message,
      timestamp: Date.now(),
      isImage: false,
    };

    chat.messages.push(reply);

    await chat.save();

    await User.updateOne(
      { _id: userId },
      { $inc: { credits: -1 } }
    );

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.log("TEXT MESSAGE ERROR:", error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};


// =====================================================
// IMAGE GENERATION MESSAGE CONTROLLER
// =====================================================

export const imageMessageController = async (req, res) => {
  try {
    const userId = req.user._id;

    // Check credits
    if (req.user.credits < 2) {
      return res.json({
        success: false,
        message: "You don't have enough credits to use this feature",
      });
    }

    const { prompt, chatId, isPublished } = req.body;

    // Find chat
    const chat = await Chat.findOne({
      userId,
      _id: chatId,
    });

    if (!chat) {
      return res.json({
        success: false,
        message: "Chat not found",
      });
    }

    // Save user message
    chat.messages.push({
      role: "user",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });

    // Encode prompt
    const encodedPrompt = encodeURIComponent(prompt);

    // Unique filename
    const fileName = `quickgpt-${Date.now()}.png`;

    // ImageKit AI image URL
    const generatedImageUrl =
      `${process.env.IMAGEKIT_URL_ENDPOINT}` +
      `/ik-genimg-prompt-${encodedPrompt}` +
      `/quickgpt/${fileName}`;

    console.log("Generating image...");
    console.log("Image URL:", generatedImageUrl);

    // =====================================================
    // WAIT UNTIL IMAGEKIT FINISHES GENERATING THE IMAGE
    // =====================================================

    let imageReady = false;
    let attempts = 0;
    const maxAttempts = 30;

    while (!imageReady && attempts < maxAttempts) {
      attempts++;

      try {
        const response = await axios.get(
          `${generatedImageUrl}?v=${Date.now()}`,
          {
            responseType: "arraybuffer",
            validateStatus: () => true,
          }
        );

        const isIntermediate =
          response.headers["is-intermediate-response"] === "true";

        const contentType =
          response.headers["content-type"] || "";

        console.log(
          `Image check ${attempts}:`,
          contentType,
          isIntermediate
        );

        // Image is ready
        if (
          response.status >= 200 &&
          response.status < 300 &&
          !isIntermediate &&
          contentType.startsWith("image/")
        ) {
          imageReady = true;
          break;
        }

        // Image still generating
        if (isIntermediate) {
          await new Promise((resolve) =>
            setTimeout(resolve, 2000)
          );
          continue;
        }

        // ImageKit returned an actual error
        const errorMessage =
          response.headers["ik-error"] ||
          `ImageKit returned status ${response.status}`;

        throw new Error(errorMessage);
      } catch (error) {
        if (attempts >= maxAttempts) {
          throw error;
        }

        await new Promise((resolve) =>
          setTimeout(resolve, 2000)
        );
      }
    }

    if (!imageReady) {
      throw new Error(
        "Image generation timed out. Please try again."
      );
    }

    console.log("Image generated successfully!");

    // =====================================================
    // SAVE IMAGE URL
    // =====================================================

    const finalImageUrl =
      `${generatedImageUrl}?v=${Date.now()}`;

    const reply = {
      role: "assistant",
      content: finalImageUrl,
      timestamp: Date.now(),
      isImage: true,
      isPublished: isPublished || false,
    };

    // Save AI image reply
    chat.messages.push(reply);

    await chat.save();

    // Deduct 2 credits
    await User.updateOne(
      { _id: userId },
      { $inc: { credits: -2 } }
    );

    console.log("Image ready:", finalImageUrl);

    // Send response
    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.log("IMAGE GENERATION ERROR:", error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};