<div align="center">

# 🤖 QUICKGPT

### AI-Powered Chat, Content & Image Generation Platform

**A modern full-stack AI application built with React, Node.js, Express, MongoDB, Gemini, ImageKit & Stripe.**

<br />

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-QuickGPT-success?style=for-the-badge)](https://quick-gpt-client-black.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge\&logo=github)](https://github.com/shubhamshrivastav1/QuickGPT-main)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](#-license)

<br />

**Built by [Shubham Shrivastav](https://github.com/shubhamshrivastav1)**

</div>

---

## 🌐 Live Demo

Experience the deployed version of QuickGPT:

### 🚀 [Open QuickGPT](https://quick-gpt-client-black.vercel.app/)

> **Note:** Some AI features depend on the availability and usage limits of third-party services such as Gemini and ImageKit.

---

# 📌 Overview

**QuickGPT** is a full-stack AI-powered platform designed to provide users with an intuitive interface for interacting with AI, generating content, creating images, managing credits, and sharing generated content with the community.

The application combines a modern React frontend with a Node.js/Express backend and integrates several external services to provide a complete AI SaaS-style experience.

### Core capabilities include:

* 🤖 AI-powered text generation
* 💬 Multi-session chat experience
* 🎨 AI image generation
* 👤 User authentication
* 💳 Credit-based usage system
* 💰 Stripe-powered credit purchases
* 🌍 Community content sharing
* 🗄️ MongoDB-based data persistence
* 🌓 Responsive dark-themed user interface
* 🔐 Protected backend APIs

---

# ✨ Features

## 🤖 AI Chat

QuickGPT provides an interactive AI chat experience with:

* AI-powered conversations
* Multiple chat sessions
* Persistent chat history
* Markdown response rendering
* Code syntax highlighting
* Loading states
* Responsive chat interface
* Conversation management

---

## 🎨 AI Image Generation

Generate images directly from natural-language prompts.

### Features

* Text-to-image generation
* ImageKit integration
* Credit-based image generation
* Generated image preview
* Image URL storage
* Community publishing support
* Generation status handling

> **Image Generation:** ImageKit AI Extension Units are required for image generation.

---

## 👤 Authentication

QuickGPT includes a secure authentication system.

### Supported functionality

* User registration
* User login
* JWT authentication
* Protected API routes
* Password hashing with BcryptJS
* Persistent login state
* Authenticated user data

---

## 💳 Credit System

QuickGPT uses a credit-based architecture to manage AI usage.

| Feature             |   Credit Cost |
| :------------------ | ------------: |
| 💬 Text Generation  |  **1 Credit** |
| 🎨 Image Generation | **2 Credits** |

The system supports:

* Credit balance tracking
* Automatic credit deduction
* Credit purchase
* Stripe payment integration
* Server-side credit validation

---

## 💰 Stripe Payments

Users can purchase additional credits through Stripe.

The backend handles:

* Checkout/payment processing
* Credit purchase requests
* Payment verification
* Stripe webhook processing
* Credit updates

> Stripe secret credentials are kept exclusively on the backend.

---

## 🌍 Community

QuickGPT includes a community section where users can discover and share AI-generated content.

Users can:

* Publish generated images
* Browse community creations
* Discover content from other users
* Share AI-generated artwork

---

## 🌓 User Experience

The application is designed with a clean and modern UI.

### UX Features

* Responsive layout
* Dark mode
* Mobile-friendly interface
* Smooth scrolling
* Loading indicators
* Toast notifications
* Clean navigation
* Modern AI-chat experience

---

# 🛠️ Technology Stack

## 🎨 Frontend

| Technology           | Purpose                     |
| :------------------- | :-------------------------- |
| **React**            | UI development              |
| **Vite**             | Development & build tooling |
| **Tailwind CSS**     | Styling                     |
| **Axios**            | HTTP requests               |
| **React Router DOM** | Client-side routing         |
| **React Hot Toast**  | Notifications               |
| **React Markdown**   | Markdown rendering          |
| **PrismJS**          | Code syntax highlighting    |
| **Moment.js**        | Date/time formatting        |

---

## ⚙️ Backend

| Technology     | Purpose                              |
| :------------- | :----------------------------------- |
| **Node.js**    | JavaScript runtime                   |
| **Express.js** | REST API framework                   |
| **MongoDB**    | Database                             |
| **Mongoose**   | MongoDB ODM                          |
| **JWT**        | Authentication                       |
| **BcryptJS**   | Password hashing                     |
| **Axios**      | API communication                    |
| **Gemini API** | AI text generation                   |
| **ImageKit**   | AI image generation & image delivery |
| **Stripe**     | Payment processing                   |

---

## ☁️ Infrastructure & Services

| Service             | Purpose                     |
| :------------------ | :-------------------------- |
| **Vercel**          | Frontend deployment         |
| **Backend Hosting** | Express API deployment      |
| **MongoDB Atlas**   | Cloud database              |
| **ImageKit**        | Image generation & CDN      |
| **Gemini API**      | AI text generation          |
| **Stripe**          | Payments & credit purchases |

---

# 🏗️ Application Architecture

```text
                         ┌─────────────────────┐
                         │        USER         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   React + Vite      │
                         │      Frontend       │
                         │       Vercel        │
                         └──────────┬──────────┘
                                    │
                             REST API / HTTP
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │  Node.js + Express  │
                         │       Backend       │
                         └──────────┬──────────┘
                                    │
               ┌────────────────────┼────────────────────┐
               │                    │                    │
               ▼                    ▼                    ▼
      ┌────────────────┐   ┌────────────────┐   ┌────────────────┐
      │  MongoDB Atlas │   │   Gemini API   │   │    ImageKit    │
      │    Database    │   │  AI Text Gen   │   │  Image Gen/CDN │
      └────────────────┘   └────────────────┘   └────────────────┘
                                    │
                                    ▼
                           ┌────────────────┐
                           │     Stripe     │
                           │    Payments    │
                           └────────────────┘
```

---

# 📂 Project Structure

```text
QuickGPT-main/
│
├── client/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── ChatBox.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── ...
│   │   │
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Community.jsx
│   │   │   ├── Credits.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── ...
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   │
│   ├── configs/
│   │   ├── db.js
│   │   ├── imageKit.js
│   │   └── openai.js
│   │
│   ├── controllers/
│   │   ├── chatController.js
│   │   ├── creditController.js
│   │   ├── messageController.js
│   │   ├── userController.js
│   │   └── ...
│   │
│   ├── middlewares/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── Chat.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── chatRoutes.js
│   │   ├── creditRoutes.js
│   │   ├── messageRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# 🚀 Getting Started

Follow the steps below to run QuickGPT locally.

---

## 📋 Prerequisites

Before running the project, make sure you have:

* **Node.js 18+**
* **npm**
* **MongoDB Atlas account**
* **Gemini API key**
* **ImageKit account**
* **Stripe account**

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/shubhamshrivastav1/QuickGPT-main.git
```

Navigate into the project:

```bash
cd QuickGPT-main
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

# 🔐 Environment Variables

QuickGPT requires separate environment files for the frontend and backend.

> ⚠️ **Never commit `.env` files or secret API keys to GitHub.**

---

## 🎨 Client Environment

Create:

```text
client/.env
```

Add:

```env
VITE_SERVER_URL=http://localhost:5000
```

For production:

```env
VITE_SERVER_URL=https://your-server-url.vercel.app
```

---

## ⚙️ Server Environment

Create:

```text
server/.env
```

Add:

```env
MONGODB_URI=your_mongodb_connection_string

GEMINI_API_KEY=your_gemini_api_key

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

JWT_SECRET=your_jwt_secret

PORT=5000
```

---

# 🗄️ MongoDB Configuration

QuickGPT uses **MongoDB Atlas** for persistent application data.

The database stores information such as:

* User accounts
* Chat sessions
* Messages
* Credit balances
* Generated content
* Community data

Example connection string:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
```

If the backend already appends `/quickgpt` to the connection string, do not append it again in the environment variable.

---

# 🤖 Gemini API

Gemini is used for AI-powered text generation.

Configure your API key in:

```env
GEMINI_API_KEY=your_gemini_api_key
```

The backend communicates with the configured Gemini API endpoint through its AI client configuration.

---

# 🖼️ ImageKit Configuration

ImageKit is responsible for AI image generation and image delivery.

Configure:

```env
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

### ⚠️ Image Generation Limits

Image generation depends on available **ImageKit AI Extension Units**.

If the account does not have enough available units, the API may return:

```text
ELIMIT - Available AI extension units are not sufficient
```

This indicates an ImageKit account/usage limitation rather than necessarily being a frontend implementation issue.

---

# 💳 Stripe Configuration

Stripe handles credit purchases.

Configure:

```env
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

For production deployments, configure the Stripe webhook to point to the appropriate backend endpoint.

---

# ▶️ Running the Application

QuickGPT consists of two applications:

* Frontend
* Backend

Both need to be running during local development.

---

## ⚙️ Start Backend

Open Terminal 1:

```bash
cd server
npm run start
```

The backend should run on:

```text
http://localhost:5000
```

Expected output:

```text
MongoDB Database connected 🔗
Server is running on port 5000
```

---

## 🎨 Start Frontend

Open Terminal 2:

```bash
cd client
npm run dev
```

Vite will normally make the application available at:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

---

# 🔌 API Documentation

## 👤 User API

Base route:

```text
/api/user
```

| Method | Endpoint             | Description                      |
| :----: | :------------------- | :------------------------------- |
| `POST` | `/api/user/register` | Register a new user              |
| `POST` | `/api/user/login`    | Authenticate user                |
|  `GET` | `/api/user/data`     | Retrieve authenticated user data |

---

## 💬 Chat API

Base route:

```text
/api/chat
```

| Method | Endpoint           | Description         |
| :----: | :----------------- | :------------------ |
| `POST` | `/api/chat/create` | Create a new chat   |
|  `GET` | `/api/chat/get`    | Retrieve user chats |

---

## 🤖 Message API

Base route:

```text
/api/message
```

| Method | Endpoint             | Description       |
| :----: | :------------------- | :---------------- |
| `POST` | `/api/message/text`  | Generate AI text  |
| `POST` | `/api/message/image` | Generate AI image |

---

## 💰 Credit API

Base route:

```text
/api/credit
```

The credit system manages:

* Credit balance
* Credit purchases
* Payment processing
* Credit updates

---

# 🔄 Text Generation Flow

```text
┌──────────────┐
│     User     │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ React Frontend   │
└────────┬─────────┘
         │
         │ POST /api/message/text
         ▼
┌──────────────────┐
│ Express Backend  │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Auth Middleware  │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Message Controller│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│    Gemini API    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   AI Response    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│     MongoDB      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ React Frontend   │
└──────────────────┘
```

---

# 🎨 Image Generation Flow

```text
┌──────────────────────┐
│ User enters prompt   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   React Frontend     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ POST /message/image  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Express Backend    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Check User Credits   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      ImageKit        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Image Generation    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Generated Image URL  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       MongoDB        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Display in Chat      │
└──────────────────────┘
```

---

# 💳 Credit Architecture

QuickGPT follows a simple credit-based usage model.

### Text Generation

```text
1 Credit
```

### Image Generation

```text
2 Credits
```

Credits are validated and deducted by the backend rather than relying solely on frontend state.

This helps prevent unauthorized client-side manipulation of usage balances.

---

# 🔒 Security

Security-sensitive configuration is kept on the server.

QuickGPT uses:

* JWT authentication
* Protected API routes
* BcryptJS password hashing
* Environment variables
* MongoDB Atlas
* CORS configuration
* Stripe webhook verification
* Server-side API credentials

### 🔴 Never expose these values publicly

```text
MONGODB_URI
GEMINI_API_KEY
IMAGEKIT_PRIVATE_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
JWT_SECRET
```

Only frontend-safe variables prefixed with:

```text
VITE_
```

should be exposed to the browser.

---

# ☁️ Deployment

## 🎨 Frontend Deployment — Vercel

The frontend application is located inside:

```text
client/
```

Recommended Vercel configuration:

| Setting              | Value              |
| :------------------- | :----------------- |
| **Project Name**     | `quick-gpt-client` |
| **Framework Preset** | `Vite`             |
| **Root Directory**   | `client`           |
| **Build Command**    | `npm run build`    |
| **Output Directory** | `dist`             |
| **Install Command**  | `npm install`      |

### Production Environment Variable

```env
VITE_SERVER_URL=https://your-server-url.vercel.app
```

After changing production environment variables, redeploy the frontend.

---

## ⚙️ Backend Deployment

The backend application is located inside:

```text
server/
```

Recommended configuration:

| Setting            | Value              |
| :----------------- | :----------------- |
| **Project Name**   | `quick-gpt-server` |
| **Root Directory** | `server`           |
| **Framework**      | Other / Node.js    |
| **Start Command**  | `npm start`        |

Add all required backend environment variables to your production hosting provider.

---

# 🌐 Production Architecture

```text
                         INTERNET
                            │
                            ▼
                 ┌─────────────────────┐
                 │      Vercel         │
                 │   React Frontend    │
                 └──────────┬──────────┘
                            │
                            │ HTTPS / REST API
                            ▼
                 ┌─────────────────────┐
                 │ Node.js + Express   │
                 │      Backend        │
                 └──────────┬──────────┘
                            │
          ┌─────────────────┼──────────────────┐
          │                 │                  │
          ▼                 ▼                  ▼
 ┌────────────────┐ ┌───────────────┐ ┌────────────────┐
 │ MongoDB Atlas  │ │  Gemini API   │ │    ImageKit    │
 │   Database     │ │ AI Generation │ │ Image Services │
 └────────────────┘ └───────────────┘ └────────────────┘
                                             │
                                             ▼
                                      ┌──────────────┐
                                      │    Stripe    │
                                      │   Payments   │
                                      └──────────────┘
```

---

# 📸 Screenshots

Add application screenshots to showcase the project.

Recommended structure:

```text
screenshots/
├── home.png
├── chat.png
├── community.png
└── credits.png
```

Then add them to this README:

```markdown
## 📸 Screenshots

### 🏠 Home

![QuickGPT Home](screenshots/home.png)

### 💬 AI Chat

![QuickGPT Chat](screenshots/chat.png)

### 🌍 Community

![QuickGPT Community](screenshots/community.png)

### 💳 Credits

![QuickGPT Credits](screenshots/credits.png)
```

---

# 🧪 Testing Checklist

Before deploying a new version, verify the following:

### Authentication

* [ ] User registration
* [ ] User login
* [ ] JWT authentication
* [ ] Protected routes
* [ ] Logout

### Chat

* [ ] Create chat
* [ ] Send message
* [ ] Receive AI response
* [ ] Chat history
* [ ] Multiple sessions

### Image Generation

* [ ] Submit image prompt
* [ ] Generate image
* [ ] Verify credit deduction
* [ ] Display generated image
* [ ] Publish image

### Credits

* [ ] Display credit balance
* [ ] Deduct credits correctly
* [ ] Purchase credits
* [ ] Verify Stripe payment
* [ ] Update balance

### UI

* [ ] Responsive design
* [ ] Dark mode
* [ ] Loading states
* [ ] Toast notifications
* [ ] Mobile layout

---

# 🐛 Troubleshooting

## MongoDB Connection Error

If you encounter:

```text
querySrv ECONNREFUSED
```

check the following:

* MongoDB connection string
* MongoDB Atlas Network Access
* Database username
* Database password
* Cluster configuration
* DNS/network connectivity

---

## 🤖 AI Model Error

If Gemini returns a model-not-found or unavailable-model error:

1. Verify the configured model name.
2. Confirm that the model is available for your API configuration.
3. Check your Gemini API credentials.
4. Verify current API/model availability.

---

## 🖼️ ImageKit `ELIMIT` Error

If you receive:

```text
ELIMIT - Available AI extension units are not sufficient
```

your ImageKit account does not currently have enough AI Extension Units available for the requested image generation.

This is generally an account usage/plan limitation rather than a frontend UI issue.

---

## 🔌 Frontend Cannot Connect To Backend

Verify:

```env
VITE_SERVER_URL=https://your-server-url.vercel.app
```

Make sure:

* The backend is deployed.
* The backend URL is correct.
* CORS allows the frontend origin.
* The environment variable is configured in the frontend deployment.
* The frontend has been redeployed after changing environment variables.

For local development:

```env
VITE_SERVER_URL=http://localhost:5000
```

---

# 📁 Environment File Layout

Your local development environment should look like:

```text
QuickGPT-main/
│
├── client/
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│
├── server/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   └── routes/
│
└── README.md
```

### Recommended `.gitignore`

Make sure secrets are ignored:

```gitignore
node_modules/
.env
.env.local
.env.production
dist/
build/
```

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

### 1. Fork the repository

### 2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

### 3. Make your changes

### 4. Stage your changes

```bash
git add .
```

### 5. Commit

```bash
git commit -m "Add new feature"
```

### 6. Push the branch

```bash
git push origin feature/new-feature
```

### 7. Open a Pull Request

---

# 📄 License

This project is licensed under the **ISC License**.

---

# 👨‍💻 Author

<div align="center">

## Shubham Shrivastav

Full-Stack Developer & Creator of QuickGPT

<br />

[![GitHub](https://img.shields.io/badge/GitHub-Shubham%20Shrivastav-181717?style=for-the-badge\&logo=github)](https://github.com/shubhamshrivastav1)

[![QuickGPT](https://img.shields.io/badge/🚀%20QuickGPT-Live%20Demo-success?style=for-the-badge)](https://quick-gpt-client-black.vercel.app/)

</div>

---

# 🔗 Project Links

### 🚀 Live Application

**https://quick-gpt-client-black.vercel.app/**

### 📦 GitHub Repository

**https://github.com/shubhamshrivastav1/QuickGPT-main**

### 👨‍💻 Developer

**https://github.com/shubhamshrivastav1**

---

# ⭐ Support

If you found **QuickGPT** useful or interesting:

* ⭐ Star the repository
* 🍴 Fork the project
* 🐛 Report issues
* 💡 Suggest improvements
* 🤝 Contribute to the project

Your support helps improve and grow the project.

---

<div align="center">

## 🤖 QUICKGPT

### Build. Create. Generate. Share.

**Made with ❤️ by Shubham Shrivastav**

<br />

⭐ **If you like this project, don't forget to star the repository!** ⭐

</div>
