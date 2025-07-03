
const Service = require("..");
const CategoryRepo = require("../../repositories/Category");
const VideoService = require("../Video");
class CategoryService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided("videos");
    const [record , transaction] = await CategoryRepo.create(this.data);

    const videos = this.data.videos.map((video) => {
      return {
        ...video,
        category_id: record.id,
      };
    });

    const servant = new VideoService(videos);
    await servant.bulkCreate();

    await transaction.commit();

    return record;
  }

  async getAll() {
    return await CategoryRepo.getAll();
  }

  async getById() {
    return await CategoryRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await CategoryRepo.update(this.id, this.data);
  }
}

module.exports = CategoryService;
