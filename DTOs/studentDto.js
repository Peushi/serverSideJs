export const toStudentDTO = (student) => {
    return {
        id: student._id,
        name: student.name,
        major: student.major 
    }
}