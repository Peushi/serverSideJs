import {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
} from "../Services/courseService.js"

export const getCourses = async (req, res) => {
    try {

        const courses = await getAllCourses()

        res.status(200).json(courses)

    } catch (error) {

        res.status(500).json({
            error: error.message
        })

    }
}

export const getCourse = async (req, res) => {
    try {

        const course = await getCourseById(req.params.id)

        if (!course) {
            return res.status(404).json({
                error: "Course not found"
            })
        }

        res.status(200).json(course)

    } catch (error) {

        res.status(500).json({
            error: error.message
        })

    }
}

export const createNewCourse = async (req, res) => {
    try {

        const course = await createCourse(req.body)

        res.status(201).json(course)

    } catch (error) {

        res.status(500).json({
            error: error.message
        })

    }
}

export const updateExistingCourse = async (req, res) => {
    try {

        const updatedCourse = await updateCourse(
            req.params.id,
            req.body
        )

        res.status(200).json(updatedCourse)

    } catch (error) {

        res.status(500).json({
            error: error.message
        })

    }
}

export const deleteExistingCourse = async (req, res) => {
    try {

        await deleteCourse(req.params.id)

        res.status(200).json({
            message: "Course deleted"
        })

    } catch (error) {

        res.status(500).json({
            error: error.message
        })

    }
}