
const NewsletterService = require("../../services/Newsletter");

const NewsletterCreation = async (req, res) => {
    const servant = new NewsletterService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const NewsletterGetAll = async (req, res) => {
    const servant = new NewsletterService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const NewsletterGetById = async (req, res) => {
    const servant = new NewsletterService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const NewsletterUpdate = async (req, res) => {
    const servant = new NewsletterService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  NewsletterCreation,
  NewsletterGetAll,
  NewsletterGetById,
  NewsletterUpdate,
};
