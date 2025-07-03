const fs = require("fs");
const { badRequest } = require("../../helpers/Errors");
class Cloudinary {
  #files;
  #cloudinary = require("./set");


  /**
   * 
   * @param {*} files 
   */
  constructor(files) {
    this.#files = files;
  }

  /**
   * @param {*} index the index of the files in the files list defined in the constructor 
   * @returns String
   */
  async upload(index) {
    const filePath = this.#files[index].path;  
    const res = await this.#cloudinary.uploader.upload(filePath, {
      public_id: this.#files[index].originalname,
    });
    return res.secure_url;
  }
  

  /**
   * @param {Number} Index the position of the photo in the files array
   * @returns String
   */
  async uploadPhoto(index) {
    const url = await this.upload(index);
    fs.unlinkSync(this.#files[index].path);
    return url;
  }

  /**
   *
   * @returns Array of Urls
   */
  async uploadPhotos() {
    if (this.#files.length == 0) {
      throw new badRequest("Provide data", `images`);
    }
    const urls = [];
    for (let i = 0; i < this.#files.length; i++) {
      const url = await this.upload(i);
      urls.push(url);
      fs.unlinkSync(this.#files[i].path);
    }
    return urls;
  }
}
module.exports = Cloudinary;