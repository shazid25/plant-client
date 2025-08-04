# 🌿 Plant Manager App

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to **add**, **view**, **edit**, and **delete** plant entries with details like watering, sunlight, fertilizer, care notes, and photos.

## 🚀 Features

- ✅ Add new plants with detailed care info
- ✅ View all added plants in a responsive grid
- ✅ Edit plant details from individual view pages
- ✅ Delete plants from your collection
- ✅ Beautiful and mobile-friendly design using Tailwind CSS
- ✅ Fully connected to MongoDB database via Express server
- 🔐 Firebase authentication supported (optional extension)

---

## 🛠️ Technologies Used

### Frontend
- React (with Vite)
- React Router DOM
- Tailwind CSS
- AOS (Animate On Scroll)
- Firebase Auth (if configured)

### Backend
- Node.js
- Express
- MongoDB Atlas
- dotenv
- CORS

---

## 📁 Folder Structure

```
plant-manager/
├── client/              # React frontend
│   ├── pages/
│   ├── components/
│   ├── routes/
│   └── main.jsx
└── server/              # Express backend
    └── index.js
```

---

## ⚙️ Getting Started

### 🔧 Prerequisites

- Node.js (v18+)
- MongoDB Atlas account (with URI)
- Firebase project (optional)

---

### 📦 Backend Setup (Express)

1. Go to the `server/` folder:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PORT=3000
DB_USER=************************
DB_PASS=********************
```

4. Start the server:

```bash
node index.js
```

✅ Server will run on `http://localhost:3000`.

---

### 💻 Frontend Setup (React)

1. Go to the `client/` folder:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

✅ React app will run on `http://localhost:5173`.

---

## 🌐 API Endpoints

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| `POST` | `/plants`            | Add a new plant     |
| `GET`  | `/plants`            | Get all plants      |
| `GET`  | `/plants/:id`        | Get plant by ID     |
| `PUT`  | `/plants/:id`        | Update plant by ID  |
| `DELETE` | `/plants/:id`      | Delete plant by ID  |

---

## 📸 Screenshots

> _Add screenshots of the homepage, add plant form, and plant list here._

---

## ✨ Future Improvements

- ✅ User-specific plant storage (via Firebase)
- ✅ Image upload via Cloudinary
- ✅ Search and filter plants
- ✅ Responsive animations and dark mode
- ✅ Bookmark favorite plants

---

## 🧑‍💻 Author

**Irfan Shazid**

> 💬 _Feel free to contribute, clone, and enhance this project._

---

## 📜 License

MIT