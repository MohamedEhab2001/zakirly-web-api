const All = (models , country) => {
    return {
        include : [
            {
                model : models.Section,
                as : "section"
            },
            {
                model : models.Age,
                as : "age"
            },
            {
                model : models.Level,
                as : "level"
            },
            {
                model : models.Teacher,
                as : "teacher"
            },
            {
                model : models.Curriculum,
                as : "curriculum"
            }, 
            {
                model : models.Prices,
                as : "prices",
                include : [
                    {
                        model : models.Currency,
                        as : "currency",
                        where : {
                            isocode : country
                        }
                    }
                ],
                where : {
                    type : "course"
                }
            }
        ]
    }
}

const One = (models , country) => {
    const get = All(models , country)
    return {
        include : [
            ...get.include,
            {
                model : models.CourseLearning,
                as:"learnings"
            },
            {
                model : models.CoursePrerequest,
                as:"prerequests"
            },
            {
                model : models.CourseBook,
                as:"books",
                include : [
                    {
                        model : models.Book,
                        as : "book"
                    }
                ]
            },
            {
                model: models.Category,
                as : "categories",
                required:false,
                include : [{
                    model: models.Video,
                    as : "videos"
                }]
            }
        ]
    }
}

module.exports = { All , One }
