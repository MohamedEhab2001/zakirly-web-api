const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (_, __, cp) => {
    cp(null, path.join(__dirname, "../../uploads"));
  },
  filename: (_, file, cp) => {
    cp(null, `${Date.now()}_${file.originalname}`);
  },
});
const fileFilter = (_, file, cb) => {
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file type" });
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB maximum for one file
  },
  fileFilter,
});

module.exports = upload;
