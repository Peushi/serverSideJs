import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            message: "User registered",
            user
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

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({
                error: "Invalid credentials"
            })
        }

        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(401).json({
                error: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.json({
            message: "Login successful",
            token
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}