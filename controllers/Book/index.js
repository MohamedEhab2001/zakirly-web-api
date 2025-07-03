
const BookService = require("../../services/Book");

const BookCreation = async (req, res) => {
    const servant = new BookService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const BookGetAll = async (req, res) => {
    const servant = new BookService({country : req.country});
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const BookGetById = async (req, res) => {
    const servant = new BookService({country : req.country}, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const BookUpdate = async (req, res) => {
    const servant = new BookService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const BookAddPrice = async (req, res) => {
    const servant = new BookService(req.body, req.params.id);
    await servant.addPriceToBook();
    res.status(200).json({ msg : "Price added successfully" });
};

module.exports = {
  BookCreation,
  BookGetAll,
  BookGetById,
  BookUpdate,
  BookAddPrice
};
