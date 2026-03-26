export const getAllStudents = (students) => {
    return students
}

export const getStudentById = (students, id) => {
    return students.find(s => s.id === id)
}