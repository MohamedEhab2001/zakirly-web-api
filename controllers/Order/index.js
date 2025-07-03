
const OrderService = require("../../services/Order");

const OrderCreation = async (req, res) => {
    const servant = new OrderService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const OrderGetAll = async (req, res) => {
    const servant = new OrderService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const OrderGetById = async (req, res) => {
    const servant = new OrderService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const OrderUpdate = async (req, res) => {
    const servant = new OrderService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  OrderCreation,
  OrderGetAll,
  OrderGetById,
  OrderUpdate,
};
