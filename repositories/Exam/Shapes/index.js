const All = (models , country) => {
    return {
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
                        where : {
                            isocode : country
                        }
                    }
                ],
                where : {
                    type : "exam",
                }
            }
        ],
        attributes : {
            include : [[models.sequelize.literal('(SELECT COUNT(*) FROM "ExamQuestions" WHERE "ExamQuestions"."exam_id" = "Exam"."id")'), "questions"]]
        }
    }
}

const One = (models , country) => {
    const get = All(models , country)
    return {
        include : [
            ...get.include,
            {
                model : models.ExamInstruction,
                as : "instructions"
            },
            {
                model : models.ExamPrerequest,
                as : "prerequests"
            },
            {
                model:models.Teacher,
                as:"teacher"
            }
        ],
        attributes : get.attributes
    }
}

const ExamQuestion = (models) => {
    return {
        include : [
            {
                model : models.Question,
                as : "questions",
                through : {
                        attributes : ["id"],
                        raw : true
                },
                include : [
                    {
                        model : models.Choice,
                        as : "choices",
                        required : false
                    }
                ]
            }
        ]
    }
}


module.exports = {All , One , ExamQuestion}