import express from "express"
import { protect } from "../Middleware/authMiddleware.js"

import {
    getStudents,
    getStudent,
    createNewStudent,
    updateExistingStudent,
    deleteExistingStudent
} from "../Controllers/studentController.js"

const router = express.Router()

// Protected routes
router.get("/", protect, getStudents)

router.get("/:id", protect, getStudent)

router.post("/", protect, createNewStudent)

router.put("/:id", protect, updateExistingStudent)

router.delete("/:id", protect, deleteExistingStudent)

export default router