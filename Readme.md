# 🚀 Real-Time Collaborative Chat Application with AI (MERN Stack)

A **full-stack, production-ready real-time chat and collaboration platform** built using the **MERN stack**, enhanced with **AI capabilities powered by Google Gemini**, **Redis caching**, and **Socket.IO–based real-time communication**.

This project demonstrates strong expertise in **full-stack development, real-time systems, authentication, AI integration, and scalable system design**.

---

## 🔑 Key Highlights

- ⚡ Real-time chat using **Socket.IO (WebSockets)**
- 🤖 AI-powered conversations using **Google Gemini**
- 🔐 Secure **JWT-based authentication**
- 👥 Project-based collaboration system
- 🚀 **Redis** for caching & real-time performance optimization
- 🧑‍💻 Integrated **code editor & file management**
- ▶️ Run code directly in the browser using **Web Containers**
- 🎨 Clean, responsive UI built with **React + Tailwind CSS**

---

## 🧠 Skills & Technologies

### Frontend

- React.js
- JavaScript (ES6+)
- Context API
- Tailwind CSS
- Axios
- Highlight.js (HLJS)

### Backend

- Node.js
- Express.js
- REST APIs
- MongoDB
- Mongoose
- JWT Authentication
- Middleware Architecture

### Real-Time & Performance

- Socket.IO
- WebSockets
- Redis (Caching & Message Broadcasting)
- Event-driven Architecture

### AI Integration

- Google Gemini API
- Prompt Engineering
- AI Service Abstraction
- AI Latency Handling

### Advanced Features

- Web Containers (Browser-based Node.js Runtime)
- Code Editor & File Tree System
- iframe-based Output Rendering

---

## 📌 Project Description

This application allows users to **register, authenticate, create projects, add collaborators**, and **communicate in real time** within project-specific chat rooms.

Users can interact with an **AI assistant directly inside the chat** using special commands (e.g., `@ai`), enabling **intelligent responses, code generation, and task execution** without leaving the collaboration environment.

The platform also includes a **code editor with file tree support**, allowing users to **run and preview code directly in the browser**.

---

## 🏗️ System Architecture

```
React Frontend
      ↓
Express.js + Node.js API
      ↓
Socket.IO (Real-Time Layer)
      ↓
Redis (Caching & Broadcasting)
      ↓
MongoDB (Persistent Storage)
      ↓
AI Service Layer → Google Gemini API
```

---

## 🔐 Authentication & Security

- User registration & login
- JWT-based authentication
- Protected routes using auth middleware
- Secure socket authentication
- Backend-only access to AI API keys
- Role-based project access

---

## 🔁 Real-Time Communication Flow

1. User logs in and establishes a socket connection
2. Socket is authenticated using JWT
3. User joins a project-specific room
4. Messages are sent via Socket.IO
5. Redis broadcasts messages for scalability
6. UI updates instantly for all collaborators

---

## 🤖 AI Integration Workflow

1. User sends a message containing `@ai`
2. Backend detects the AI trigger
3. Prompt is extracted from the message
4. Request sent to **Google Gemini API**
5. AI response processed asynchronously
6. Response broadcasted via Socket.IO
7. Frontend displays AI-generated message in real time

---

## 📂 Code Editor & File Management

- Visual file tree for project structure
- Integrated code editor
- Syntax highlighting using Highlight.js
- Run code inside browser using Web Containers
- Output rendered using iframe

---

## 🧪 Sample AI Prompt

```
@ai explain how Redis improves real-time chat performance
```

---

## 📁 Project Structure (Simplified)

```
frontend/
├── auth/
├── config/
├── context/
├── routes/
└── screens/

backend/
├── controllers/
├── db/
├── models/
├── middleware/
├── services/   # AI & Redis
└── server.js
```

---

## ⚡ Performance Optimizations

- Redis caching for frequently accessed data
- Event-based Socket.IO communication
- Reduced API calls using local state & context
- Async AI processing to prevent UI blocking

---

## 🚧 Future Improvements

- 🔍 Message search & filtering
- 📎 File uploads & media sharing
- 🔐 End-to-end encryption
- 🧠 AI chat summarization
- 🧑‍⚖️ Role-based permissions
- ⏱️ Rate limiting for AI usage
- 🔔 Notifications & mentions

---

## 👨‍💻 Author

**Aadi Munjale**
Full-Stack Developer | MERN | Real-Time Systems | AI Integration

---

⭐ If you find this project useful, feel free to **star** the repository!
