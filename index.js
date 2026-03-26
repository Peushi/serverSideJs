import express from "express"
import cors from "cors"
import studentRoutes from "./Routes/studentRoute.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "API is running" })
})

// Use routes
app.use("/students", studentRoutes)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})