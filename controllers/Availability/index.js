
const AvailabilityService = require("../../services/Availability");

const AvailabilityCreation = async (req, res) => {
    const servant = new AvailabilityService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const AvailabilityGetAll = async (req, res) => {
    const servant = new AvailabilityService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const AvailabilityGetById = async (req, res) => {
    const servant = new AvailabilityService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const AvailabilityUpdate = async (req, res) => {
    const servant = new AvailabilityService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  AvailabilityCreation,
  AvailabilityGetAll,
  AvailabilityGetById,
  AvailabilityUpdate,
};
