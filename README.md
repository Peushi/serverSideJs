# Node.js REST API — Students

This project is a simple REST API built with Node.js and Express.
It serves student data and demonstrates basic backend concepts like routing, middleware, and API structure.

---

## Features

* Get all students
* Get a student by ID
* Basic CRUD route structure (GET, POST, PUT, DELETE)
* CORS enabled for frontend communication
* Clean architecture using:

  * Routes
  * Controllers
  * Services

---

## Technologies Used

* Node.js
* Express
* Nodemon
* CORS

---

##  Project Structure

```
project/
├── index.js
├── students.js
├── routes/
│   └── students.js
├── controllers/
│   └── studentsController.js
├── services/
│   └── studentsService.js
├── package.json
```

---

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm run dev
```

3. Server will run on:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/students`     | Get all students     |
| GET    | `/students/:id` | Get a student by ID  |
| POST   | `/students`     | Create a new student |
| PUT    | `/students/:id` | Update a student     |
| DELETE | `/students/:id` | Delete a student     |

---

## Frontend

The API is connected to a simple frontend using `fetch()` to display student data in the browser.

---

## What I Learned

* How to build a REST API with Express
* How to use middleware like CORS and JSON parser
* Difference between routes, controllers, and services
* How to debug API requests using the browser Network tab

---

