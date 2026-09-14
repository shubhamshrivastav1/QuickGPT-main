import { assets } from "../assets/assets";
import moment from "moment";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Prism from "prismjs";

const Message = ({ message }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    setImageError(false);
  }, [message.content]);

  return (
    <div>
      {message.role === "user" ? (
        <div className="flex items-center justify-end my-4 gap-2">
          <div className="flex flex-col gap-2 p-2 px-4 bg-slate-50 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md max-w-2xl">
            <p className="text-sm dark:text-primary">
              {message.content}
            </p>

            <span className="text-xs text-gray-400 dark:text-[#B1A6C0]">
              {moment(message.timestamp).fromNow()}
            </span>
          </div>

          <img
            src={assets.user_icon}
            alt="user"
            className="w-8 rounded-full"
          />
        </div>
      ) : (
        <div className="inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-primary/20 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md my-4">

          {message.isImage ? (
            <>
              {!imageError ? (
                <img
                  src={message.content}
                  alt="Generated AI content"
                  className="w-full max-w-md mt-2 rounded-md"
                  onError={() => {
                    console.error(
                      "Image failed to load:",
                      message.content
                    );
                    setImageError(true);
                  }}
                />
              ) : (
                <div className="p-4 text-sm text-red-500">
                  Unable to load generated image.
                </div>
              )}
            </>
          ) : (
            <div className="text-sm dark:text-primary reset-tw">
              <Markdown>{message.content}</Markdown>
            </div>
          )}

          <span className="text-xs text-gray-400 dark:text-[#B1A6C0]">
            {moment(message.timestamp).fromNow()}
          </span>
        </div>
      )}
    </div>
  );
};

export default Message;