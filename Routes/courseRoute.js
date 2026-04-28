import express from "express"

import { protect } from "../Middleware/authMiddleware.js"

import {
    getCourses,
    getCourse,
    createNewCourse,
    updateExistingCourse,
    deleteExistingCourse
} from "../Controllers/courseController.js"

const router = express.Router()

router.get("/", protect, getCourses)

router.get("/:id", protect, getCourse)

router.post("/", protect, createNewCourse)

router.put("/:id", protect, updateExistingCourse)

router.delete("/:id", protect, deleteExistingCourse)

export default router