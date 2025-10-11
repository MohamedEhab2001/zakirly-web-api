
const Service = require("..");
const { badRequest } = require("../../helpers/Errors");
const TeacherRepo = require("../../repositories/Teacher");
const TeacherQualificationService = require("../TeacherQualification");
const TeacherSectionService = require("../TeacherSection");
const bcrypt = require('bcryptjs');
const { unAuthanticated } = require("../../helpers/Errors");
const { generateToken } = require("../../helpers/HelperMethods");

class TeacherService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }


  async create() {
    this._checkIfDataProvided(null , ["teacher_qualifications" , "teacher_sections"]);


    const {  email, password  } = this.data;
    const existing = await TeacherRepo.findByEmail(email);
    if (existing) throw new badRequest('Email already registered');
    const hashedPassword = await bcrypt.hash(password, 10);
    

    const [record, transaction] = await TeacherRepo.create({...this.data , password:hashedPassword});
    const qualifications = this.data.teacher_qualifications.map(ql => ({
      ...ql,
      teacher_id : record.id
    }))

    const sections = this.data.teacher_sections.map(section => ({
      section_id : section,
      teacher_id : record.id
    }))

    const teacherQualificationService = new TeacherQualificationService(qualifications , null , transaction);
    await teacherQualificationService.bulkCreate();

    const teacherSectionService = new TeacherSectionService(sections , null , transaction);
    await teacherSectionService.bulkCreate();



    await transaction.commit();
    return record;
  }

  
  async login() {
    this._checkIfDataProvided();
    const { email, password } = this.data;
    const user = await TeacherRepo.findByEmail(email);
    if (!user) throw new Error('خطأ في بيانات الدخول');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new unAuthanticated('خطأ في بيانات الدخول');
    const token = generateToken({ id: user.id, email: user.email } , "10d");
    return  token;
  }

  async getAll() {
    return await TeacherRepo.getAll();
  }

  async getById() {
    return await TeacherRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await TeacherRepo.update(this.id, this.data);
  }

  async delete() {
    this._checkIfIdProvided();
    return await TeacherRepo.delete(this.id);
  }

}

module.exports = TeacherService;
