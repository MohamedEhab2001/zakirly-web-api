const One  = (models) => {
    return {
        include : [
            {
                model : models.TeacherQualification,
                as : "qualifications"
            },
            {
                model : models.TeacherSection,
                as : "sections",
                include : [
                    {
                        model : models.Section,
                        as : "section"
                    }
                ]
            },
            {
                model : models.TeacherReview,
                as : "reviews"
            },
            {
                model : models.Course,
                as : "courses",
                include : [
                    {
                        model : models.Section,
                        as : "section"
                    },
                    {
                        model : models.Level,
                        as : "level"
                    }
                ]
            },
            {
                model : models.Exam,
                as : "exams",
                include : [
                    {
                        model : models.Section,
                        as : "section"
                    },
                    {
                        model : models.Level,
                        as : "level"
                    }
                ]
            }
        ]
    }
}

module.exports = { One }