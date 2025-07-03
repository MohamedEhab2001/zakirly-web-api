
const OrderProductService = require("../../services/OrderProduct");

const OrderProductCreation = async (req, res) => {
    const servant = new OrderProductService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const OrderProductGetAll = async (req, res) => {
    const servant = new OrderProductService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const OrderProductGetById = async (req, res) => {
    const servant = new OrderProductService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const OrderProductUpdate = async (req, res) => {
    const servant = new OrderProductService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  OrderProductCreation,
  OrderProductGetAll,
  OrderProductGetById,
  OrderProductUpdate,
};
