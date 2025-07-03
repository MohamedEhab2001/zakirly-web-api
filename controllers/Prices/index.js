
const PricesService = require("../../services/Prices");

const PricesCreation = async (req, res) => {
    const servant = new PricesService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const PricesGetAll = async (req, res) => {
    const servant = new PricesService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const PricesGetById = async (req, res) => {
    const servant = new PricesService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const PricesUpdate = async (req, res) => {
    const servant = new PricesService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  PricesCreation,
  PricesGetAll,
  PricesGetById,
  PricesUpdate,
};
