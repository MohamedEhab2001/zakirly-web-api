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
                    },
                    {
                        model : models.Prices,
                        as : "prices",
                        include : [
                            {
                                model : models.Currency,
                                as : "currency",
                            }
                        ],
                        where : {
                            type : "course"
                        }
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


const All = (models) => {
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
    ]
  }
}
module.exports = { One , All }