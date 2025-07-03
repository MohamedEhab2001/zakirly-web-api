const Cloudinary = require("../../thirdParties/Cloudinary");

class Uploader {
  #files;
  constructor(files = null) {
    this.#files = files;
  }

  /**
   * @returns Object
   */
  async upload() {
    const uploader = new Cloudinary(this.#files);
    const photos_urls = await uploader.uploadPhotos();
    return photos_urls;
  }
}

module.exports = Uploader;
