import express from "express"
import { getStudents, getStudent } from "../Controllers/studentController.js"

const router = express.Router()

// GET all students
router.get("/", getStudents)

// GET student by ID
router.get("/:id", getStudent)

// POST — create a new student
router.post("/", (req, res) => {
    res.status(201).json({
        message: "Student created",
        data: req.body
    })
})

// PUT — update a student by ID
router.put("/:id", (req, res) => {
    res.json({
        message: `Student ${req.params.id} updated`,
        data: req.body
    })
})

// DELETE — remove a student by ID
router.delete("/:id", (req, res) => {
    res.json({
        message: `Student ${req.params.id} deleted`
    })
})

export default router