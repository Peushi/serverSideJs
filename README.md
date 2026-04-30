````markdown
# Student Management API

A backend Student Management API built with Node.js, Express, MongoDB Atlas, and JWT authentication.

This project demonstrates backend architecture best practices including:
- REST API design
- CRUD operations
- Authentication & authorization
- Middleware
- MongoDB integration
- File uploads with Multer
- DTO security patterns
- Protected routes

---

# Features

## Authentication
- User registration
- User login
- Password hashing with bcrypt
- JWT token authentication
- Protected routes

## Students Resource
- Get all students
- Get student by ID
- Create student
- Update student
- Delete student

## Courses Resource
- Get all courses
- Get course by ID
- Create course
- Update course
- Delete course

## Security & Middleware
- CORS enabled
- express.json middleware
- Logger middleware
- JWT authentication middleware
- Validation middleware
- Environment variables with dotenv
- DTOs to protect sensitive data

## File Uploads
- Image upload support using Multer
- Static file serving with Express
- Upload validation

---

# Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Multer
- dotenv
- Nodemon
- CORS

---

# Project Structure

```text
project/
├── config/
│   └── db.js
│
├── Controllers/
│   ├── authController.js
│   ├── studentController.js
│   └── courseController.js
│
├── DTOs/
│   ├── studentDto.js
│   └── userDto.js
│
├── Middleware/
│   ├── authMiddleware.js
│   ├── logger.js
│   ├── multerConfig.js
│   └── validateStudent.js
│
├── models/
│   ├── Student.js
│   ├── User.js
│   └── Course.js
│
├── public/
│   └── uploads/
│       └── .gitkeep
│
├── Routes/
│   ├── authRoute.js
│   ├── studentRoute.js
│   └── courseRoute.js
│
├── Services/
│   ├── studentService.js
│   └── courseService.js
│
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
````

---

# Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

---

# Installation

## 1. Clone the repository

```bash
git clone <your-repo-url>
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run the server

```bash
npm run dev
```

Server runs on:

```text
http://localhost:3000
```

---

# Authentication

Most routes are protected using JWT authentication.

After login, include the token in requests:

```http
Authorization: Bearer YOUR_TOKEN
```

---

# API Endpoints

## Auth Routes

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | `/auth/register` | Register user |
| POST   | `/auth/login`    | Login user    |

---

## Student Routes

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/students`     | Get all students  |
| GET    | `/students/:id` | Get student by ID |
| POST   | `/students`     | Create student    |
| PUT    | `/students/:id` | Update student    |
| DELETE | `/students/:id` | Delete student    |

---

## Course Routes

| Method | Endpoint       | Description      |
| ------ | -------------- | ---------------- |
| GET    | `/courses`     | Get all courses  |
| GET    | `/courses/:id` | Get course by ID |
| POST   | `/courses`     | Create course    |
| PUT    | `/courses/:id` | Update course    |
| DELETE | `/courses/:id` | Delete course    |

---

# Multer File Uploads

Uploaded images are stored in:

```text
public/uploads
```

Static file serving is enabled with:

```js
app.use(express.static("public"))
```

---

# DTO Security

DTOs (Data Transfer Objects) are used to prevent exposing sensitive data such as:

* passwords
* emails
* private information

Example response:

```json
[
  {
    "id": "123",
    "name": "Alice",
    "major": "Computer Science"
  }
]
```

---

# GDPR & Security Practices

* Passwords hashed with bcrypt
* JWT tokens expire automatically
* Secrets stored in `.env`
* Sensitive data hidden using DTOs
* Protected API routes
* File upload validation
* User deletion supported

---

# What I Learned

* Building REST APIs with Express
* MongoDB & Mongoose integration
* Authentication with JWT
* Password hashing with bcrypt
* Middleware architecture
* File uploads with Multer
* DTO security patterns
* CRUD operations
* Protected routes

---

```
```
