
const Service = require("..");
const { badRequest, unAuthanticated } = require("../../helpers/Errors");
const UserRepo = require("../../repositories/User");
const Zakirly = require("../../helpers/Zakirly");
// const { generateToken } = require("../../helpers/HelperMethods");
const bcrypt = require('bcryptjs');

class UserService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async register() {
    this._checkIfDataProvided();
    const { name, email, password, avatar, phone, curriculum_id } = this.data;
    const existing = await UserRepo.findByEmail(email);
    if (existing) throw new badRequest('Email already registered');
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserRepo.create({ name, email, password: hashedPassword, avatar, phone, curriculum_id });
    return user;
  }

  async login() {
    this._checkIfDataProvided();
    const { email, password } = this.data;
    const user = await UserRepo.findByEmail(email);
    if (!user) throw new Error('خطأ في بيانات الدخول');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new unAuthanticated('خطأ في بيانات الدخول');
    // const token = generateToken({ id: user.id, email: user.email } , "10d");
    return  user;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await UserRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await UserRepo.getAll();
  }

  async getById() {
    const user = await UserRepo.ById(this.id);
    if(!user) throw new Error("User not found");
    const zakirly = new Zakirly();
    const student = await zakirly.getStudentByEmail(user.email);
    if(student){
      delete student._id;
      delete student.__v;
      user.dataValues.dashboard = student;
    }
    if (user.solutions && user.solutions.length > 0) {
      const total = user.solutions.reduce((sum, s) => sum + (s.total || 0), 0);
      user.dataValues.average_score = total / user.solutions.length;
    } else {
      user.dataValues.average_score = null;
    }
    return user;
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await UserRepo.update(this.id, this.data);
  }
}

module.exports = UserService;
