# EduWave – Online Learning Platform

A full-stack online learning platform where instructors can create and manage courses, and learners can explore, enroll, and track their learning journey. Designed with a modern UI, smooth animations, and secure authentication.

🌍 **Live Website:** [https://your-live-link-here](https://your-live-link-here)  
💻 **Client GitHub Repo:** [https://github.com/your-client-repo](https://github.com/your-client-repo)  
🛠️ **Server GitHub Repo:** [https://github.com/your-server-repo](https://github.com/your-server-repo)

---

## 🚀 Features

- 🔐 **Email & Google Authentication** (Login, Register, Protected Routes)
- 🎓 **Browse & Filter Courses** (Category Filter, Featured Courses, Search Support)
- 🧑‍🏫 **Instructor Dashboard** (Add Course, My Added Courses, Update, Delete)
- 📘 **Learner Dashboard** (My Enrolled Courses)
- 📝 **Course Details Page** (Private Route with "Enroll Now")
- 💾 **MongoDB CRUD Operations** with secure API
- 🌗 **Dark/Light Theme Toggle** (Challenge Completed)
- 🎨 **Fully Responsive UI** using Tailwind CSS
- ⚡ **Animations** Using Framer Motion & AOS
- 🔄 **TanStack Query / Axios** for Data Fetching
- 🔥 **Firebase Authentication & Hosting** (optional)
- 🖼️ **Image Upload** via imgbb

---

## 🏛️ Project Pages Overview

### Home Page
- Hero Banner
- Popular Courses (6 featured items)
- Why Choose Us
- Top Instructors
- Beautiful animations

### All Courses
- Grid layout
- Filter by category
- View Details button

### Course Details (Private)
- Full course info
- Enroll Now (toast success)

### Dashboard

**For Instructors:**
- Add Course
- My Added Courses
- Update
- Delete

**For Students:**
- My Enrolled Courses

---

## 🧱 Tech Stack

### Frontend
- React + Vite
- React Router
- Tailwind CSS
- DaisyUI (optional)
- Framer Motion
- AOS
- Axios / TanStack Query
- Firebase Auth

### Backend
- Node.js
- Express.js
- MongoDB
- JWT
- dotenv
- cors

---

## ⚙️ Environment Variables

### Create `.env` file in server:
```env
PORT=5000
MONGO_URI=your-mongodb-uri
ACCESS_TOKEN_SECRET=your-jwt-secret
```

### Client `.env`:
```env
VITE_apiKey=your-firebase-api-key
VITE_authDomain=your-domain
VITE_projectId=your-project-id
VITE_imgbbKey=your-imgbb-api-key
VITE_serverUrl=your-server-url
```

---

## 📦 Installation & Setup

### Client
```bash
git clone your-client-repo
cd client
npm install
npm run dev
```

### Server
```bash
git clone your-server-repo
cd server
npm install
npm start
```

---

## 🔥 Instructor Details Auto-Fill

Add Course page automatically fills:
- Instructor name
- Instructor email
- Instructor photo

---

## 🔥 Toast Notifications

- Success
- Error
- Delete Confirmation

(Using React Hot Toast / SweetAlert2)

---

## 🛡️ Private Route Protection

- JWT-based
- No redirect issue on reload
- Logged-in users stay on private pages

---

## ❌ Custom 404 Page

Included with animation + navigation button.

---

## 🎯 Optional Features Implemented (If applied)

- ⭐ Rating & Review System
- 📜 Downloadable Certificates
- 📊 Progress Chart (Recharts)

---

## 📝 Author

**Masum Billah**  
Developer of EduWave – Online Learning Platform