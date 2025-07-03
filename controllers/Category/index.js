
const CategoryService = require("../../services/Category");

const CategoryCreation = async (req, res) => {
    const servant = new CategoryService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const CategoryGetAll = async (req, res) => {
    const servant = new CategoryService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const CategoryGetById = async (req, res) => {
    const servant = new CategoryService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const CategoryUpdate = async (req, res) => {
    const servant = new CategoryService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  CategoryCreation,
  CategoryGetAll,
  CategoryGetById,
  CategoryUpdate,
};
