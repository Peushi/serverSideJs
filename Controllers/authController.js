import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { toUserDTO } from "../DTOs/userDto.js"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const image = req.file ? req.file.path : null

        // validation
        if (!name || !email || !password) {
            return res.status(400).json({
                error: "All fields are required"
            })
        }

        // check existing user
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({
                error: "Email already exists"
            })
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            image
        })

        // create token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        // response with DTO
        res.status(201).json({
            message: "User registered successfully",
            token,
            user: toUserDTO(user)
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // find user
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({
                error: "Invalid credentials"
            })
        }

        // compare password
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(401).json({
                error: "Invalid credentials"
            })
        }

        // create token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        // response with DTO
        res.status(200).json({
            message: "Login successful",
            token,
            user: toUserDTO(user)
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}