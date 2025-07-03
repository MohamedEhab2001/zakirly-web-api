
const ContactService = require("../../services/Contact");

const ContactCreation = async (req, res) => {
    const servant = new ContactService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const ContactGetAll = async (req, res) => {
    const servant = new ContactService();
    const records = await servant.getAll();
    res.status(200).json({ record : records[0] });
};

const ContactGetById = async (req, res) => {
    const servant = new ContactService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const ContactUpdate = async (req, res) => {
    const servant = new ContactService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  ContactCreation,
  ContactGetAll,
  ContactGetById,
  ContactUpdate,
};
