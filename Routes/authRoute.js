import express from "express"
import { register, login } from "../Controllers/authController.js"
import multerConfig from "../Middleware/multer-config.js"
import { validateStudent } from "../Middleware/validateStudent.js"

const router = express.Router()

router.post("/register", multerConfig, validateStudent, register)
router.post("/login", login)

export default router