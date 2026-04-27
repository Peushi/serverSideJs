import "dotenv/config"

import express from "express"
import cors from "cors"

import studentRoutes from "./Routes/studentRoute.js"
import { logger } from "./Middleware/logger.js"

import authRoutes from "./Routes/authRoute.js"
import connectDB from "./config/db.js"

const app = express()
const port = process.env.PORT || 3000
connectDB()

// Middleware
app.use(logger)
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use("/auth", authRoutes)

// Routes
app.get("/", (req, res) => {
    res.json({ message: "API is running" })
})

app.use("/students", studentRoutes)

// Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})