
const TestimonialService = require("../../services/Testimonial");

const TestimonialCreation = async (req, res) => {
    const servant = new TestimonialService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const TestimonialGetAll = async (req, res) => {
    const servant = new TestimonialService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const TestimonialGetById = async (req, res) => {
    const servant = new TestimonialService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const TestimonialUpdate = async (req, res) => {
    const servant = new TestimonialService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const TestimonialDelete = async (req, res) => {
    const servant = new TestimonialService(null, req.params.id);
    const record = await servant.delete();
    res.status(200).json({ record });
};

module.exports = {
  TestimonialCreation,
  TestimonialGetAll,
  TestimonialGetById,
  TestimonialUpdate,
  TestimonialDelete,
};
