import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from "../Services/studentsService.js"

export const getStudents = async (req, res) => {
    try {
        const students = await getAllStudents()
        res.json(students)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getStudent = async (req, res) => {
    try {
        const student = await getStudentById(req.params.id)

        if (!student) {
            return res.status(404).json({
                error: "Student not found"
            })
        }

        res.json(student)
    } catch (error) {
        res.status(500).json({ error: error.message })
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