import "dotenv/config"

import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import studentRoutes from "./Routes/studentRoute.js"
import { logger } from "./Middleware/logger.js"

const app = express()
const port = process.env.PORT || 3000

// MongoDB connection
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB")
} catch (err) {
    console.error(err)
    process.exit(1)
}

// Middleware
app.use(logger)
app.use(cors())
app.use(express.json())

// Routes
app.get("/", (req, res) => {
    res.json({ message: "API is running" })
})

app.use("/students", studentRoutes)

// Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})