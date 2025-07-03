
const CurrencyService = require("../../services/Currency");

const CurrencyCreation = async (req, res) => {
    const servant = new CurrencyService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const CurrencyGetAll = async (req, res) => {
    const servant = new CurrencyService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const CurrencyGetById = async (req, res) => {
    const servant = new CurrencyService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const CurrencyUpdate = async (req, res) => {
    const servant = new CurrencyService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  CurrencyCreation,
  CurrencyGetAll,
  CurrencyGetById,
  CurrencyUpdate,
};
