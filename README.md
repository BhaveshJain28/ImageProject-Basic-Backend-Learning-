# 📸 PixelPost — Image Sharing Platform

A full-stack image sharing web application built with **React**, **Express.js**, and **MongoDB**. Upload images to the cloud, add captions, and browse a beautiful community feed.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

---

## ✨ Features

- 📤 **Image Upload** — Drag & drop or browse to upload images with live preview
- ☁️ **Cloud Storage** — Images stored on [ImageKit](https://imagekit.io/) CDN for fast global delivery
- 🖼️ **Beautiful Feed** — Browse all community posts in a modern card-based layout
- 🔍 **Image Modal** — Click any image to view it fullscreen with zoom
- ❤️ **Like Posts** — Interact with posts using like, share, and bookmark buttons
- ⏳ **Loading Skeletons** — Smooth shimmer placeholders while content loads
- 🔔 **Toast Notifications** — Real-time success/error feedback
- ⬆️ **Back to Top** — Floating button to scroll back to top on long feeds
- 📱 **Fully Responsive** — Looks great on desktop, tablet, and mobile
- 🌙 **Dark Theme** — Modern dark UI with gradient accents

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React 19, React Router, Axios     |
| Bundler    | Vite 7                            |
| Backend    | Express.js 5, Multer              |
| Database   | MongoDB (via Mongoose)            |
| Storage    | ImageKit (cloud image CDN)        |
| Styling    | Pure CSS (no frameworks)          |

---

## 📁 Project Structure

```
PixelPost/
├── backend/
│   ├── server.js              # Entry point — starts Express server
│   ├── package.json
│   └── src/
│       ├── app.js             # Express app, routes & middleware
│       ├── db/
│       │   └── db.js          # MongoDB connection via Mongoose
│       ├── models/
│       │   └── post.model.js  # Post schema (image URL + caption)
│       └── services/
│           └── storage.service.js  # ImageKit upload service
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx            # Root component with routing
│       ├── index.css           # Global styles (dark theme)
│       ├── main.jsx           # React entry point
│       ├── components/
│       │   ├── Navbar.jsx     # Navigation bar
│       │   ├── Toast.jsx      # Toast notification system
│       │   ├── ImageModal.jsx # Fullscreen image viewer
│       │   ├── LoadingSkeleton.jsx  # Shimmer loading cards
│       │   └── BackToTop.jsx  # Scroll-to-top button
│       └── pages/
│           ├── HomePage.jsx   # Landing page with features
│           ├── CreatePost.jsx # Upload form with preview
│           └── FeedPage.jsx   # Image feed with interactions
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas cloud)
- [ImageKit](https://imagekit.io/) account (free tier available)

### 1. Clone the repository

```bash
git clone https://github.com/BhaveshJain28/pixelpost.git
cd pixelpost
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=mongodb://localhost:27017/pixelpost
ImageKit_privateKey=your_imagekit_private_key
```

Start the backend server:

```bash
npm start
```

The server runs on `http://localhost:3000`.

### 3. Set up the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`.

---

## 📡 API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | `/posts`         | Fetch all posts       |
| POST   | `/create-posts`  | Create a new post (multipart form: `image` + `caption`) |

---

## 🖥️ Screenshots

### 🏠 Home Page
> Modern landing page with animated gradient text and feature cards.

### ✨ Create Post
> Upload form with live image preview, character counter, and drag-and-drop support.

### 🖼️ Feed
> Card-based feed with avatar headers, like/bookmark/share actions, loading skeletons, and fullscreen image modal.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💜 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [ImageKit](https://imagekit.io/)

---

> Built with 💜 as a backend learning project