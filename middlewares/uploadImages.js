const Uploader = require("../services/Uploader");

const uploadImage = async (req, res, next) => {
  if (req.files?.length) {
    const uploader = new Uploader(req.files);
    const photos = await uploader.upload();
    req.body.photos = [...photos];
  }
  next();
};

module.exports = uploadImage;
