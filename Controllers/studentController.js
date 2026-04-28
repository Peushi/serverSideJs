import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from "../Services/studentsService.js"
import { toStudentDTO } from "../DTOs/studentDto.js"

export const getStudents = async (req, res) => {
    try {
        const students = await getAllStudents()

        const studentsDTO = students.map(toStudentDTO)

        res.status(200).json(studentsDTO)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getStudent = async (req, res) => {
    try {
        const student = await getStudentById(req.params.id)

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            })
        }

        res.status(200).json(toStudentDTO(student))

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const createNewStudent = async (req, res) => {
    try {
        const newStudent = await createStudent(req.body)
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const updateExistingStudent = async (req, res) => {
    try {
        const updatedStudent = await updateStudent(
            req.params.id,
            req.body
        )

        res.json(updatedStudent)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteExistingStudent = async (req, res) => {
    try {
        await deleteStudent(req.params.id)

        res.json({
            message: "Student deleted successfully"
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}