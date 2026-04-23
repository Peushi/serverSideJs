import Student from "../models/Student.js"

export const getAllStudents = async () => {
    return await Student.find()
}

export const getStudentById = async (id) => {
    return await Student.findById(id)
}

export const createStudent = async (studentData) => {
    return await Student.create(studentData)
}

export const updateStudent = async (id, updatedData) => {
    return await Student.findByIdAndUpdate(id, updatedData, {
        new: true
    })
}

export const deleteStudent = async (id) => {
    return await Student.findByIdAndDelete(id)
}