const All = (models) => {
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
        ],
        attributes : {
            include : [[models.sequelize.literal('(SELECT COUNT(*) FROM "ExamQuestions" WHERE "ExamQuestions"."exam_id" = "Exam"."id")'), "questions"]]
        }
    }
}

const One = (models) => {
    const get = All(models)
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


module.exports = {All , One}