
const UserService = require("../../services/User");

const UserCreation = async (req, res) => {
    const servant = new UserService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const UserGetAll = async (req, res) => {
    const servant = new UserService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const UserGetById = async (req, res) => {
    const servant = new UserService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const UserUpdate = async (req, res) => {
    const servant = new UserService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const UserLogin = async (req, res) => {
    const servant = new UserService(req.body);
    const user = await servant.login();
    res.status(200).json({ record : user.id });
};

const UserRegister = async (req, res) => {
    const servant = new UserService(req.body);
    const user = await servant.register();
    res.status(200).json({ record : user.id });
};

module.exports = {
  UserCreation,
  UserGetAll,
  UserGetById,
  UserUpdate,
  UserLogin,
  UserRegister,
};
