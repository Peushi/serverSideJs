import { getAllStudents, getStudentById } from "../Services/studentsService.js"
import { students } from "../students.js"

export const getStudents = (req, res) => {
    res.json(getAllStudents(students))
}

export const getStudent = (req, res) => {
    const id = parseInt(req.params.id)
    const student = getStudentById(students, id)

    if (!student) {
        return res.status(404).json({ error: "Student not found" })
    }

    res.json(student)
}