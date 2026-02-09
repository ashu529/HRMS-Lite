# HRMS Lite

A lightweight **Human Resource Management System (HRMS Lite)** built as a full‑stack web application. The project focuses on core HR operations such as employee management with a clean UI, RESTful APIs, proper validation, and database persistence.

This application is designed to be simple, stable, and realistically usable, aligning with real‑world internal admin tools rather than over‑engineered demos.

---

## 🚀 Features

### Employee Management

* Add new employees with:

  * Employee ID (unique)
  * Full Name
  * Email Address
  * Department
* View all employees in a clean tabular layout
* Delete employee records

### System Highlights

* RESTful backend APIs
* Server‑side validation
* Duplicate employee handling
* Meaningful error messages
* Persistent data storage
* Clean, professional UI

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* JavaScript
* Axios
* Plain CSS (no UI libraries)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Deployment (Recommended)

* Frontend: Vercel / Netlify
* Backend: Render
* Database: MongoDB Atlas

---

## 📁 Project Structure

```
HRMS/
├── hrms-backend/
│   ├── server.js
│   ├── models/
│   │   ├── Employee.js
│   │   └── Attendance.js
│   ├── routes/
│   │   ├── employeeRoutes.js
│   │   └── attendanceRoutes.js
│   └── .env
│
└── hrms-frontend/
    ├── src/
    │   └── App.jsx
    ├── package.json
    └── vite.config.js
```

---

## ⚙️ Running the Project Locally

### Prerequisites

* Node.js (v20.19+ or v22+)
* MongoDB Atlas account
* Git

---

### Backend Setup

```bash
cd hrms-backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Start the backend server:

```bash
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd hrms-frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### Employee APIs

| Method | Endpoint                     | Description       |
| ------ | ---------------------------- | ----------------- |
| POST   | `/api/employees`             | Add employee      |
| GET    | `/api/employees`             | Get all employees |
| DELETE | `/api/employees/:employeeId` | Delete employee   |

---

## 🧪 Validation & Error Handling

* Required field validation
* Email format validation
* Duplicate employee ID prevention
* Proper HTTP status codes
* User‑friendly error messages

---

## 🧠 Assumptions & Limitations

* Single admin user (no authentication)
* Attendance module is optional and not mandatory
* Payroll, leave management, and advanced HR features are intentionally out of scope
* Designed for simplicity and clarity within limited time

---

## 📌 Future Enhancements (Optional)

* Attendance tracking
* Dashboard summary
* Filtering and search
* Pagination
* Role‑based authentication

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Ashutosh Singh**

---

## ✅ Final Note

This project was built with a focus on **clean architecture, stability, and practical usability**, making it suitable for evaluation as a real‑world full‑stack assignment.
