
const CourseReviewService = require("../../services/CourseReview");

const CourseReviewCreation = async (req, res) => {
    const servant = new CourseReviewService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const CourseReviewGetAll = async (req, res) => {
    const servant = new CourseReviewService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const CourseReviewGetById = async (req, res) => {
    const servant = new CourseReviewService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const CourseReviewUpdate = async (req, res) => {
    const servant = new CourseReviewService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  CourseReviewCreation,
  CourseReviewGetAll,
  CourseReviewGetById,
  CourseReviewUpdate,
};
