
const Service = require("..");
const TeacherRepo = require("../../repositories/Teacher");
const TeacherQualificationService = require("../TeacherQualification");
const TeacherSectionService = require("../TeacherSection");
class TeacherService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }


  async create() {
    this._checkIfDataProvided(null , ["teacher_qualifications" , "teacher_sections"]);
    const [record, transaction] = await TeacherRepo.create(this.data);

    
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
