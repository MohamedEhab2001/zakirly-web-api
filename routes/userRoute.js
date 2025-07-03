
const express = require("express");
const router = express.Router();
const {
  UserCreation,
  UserGetAll,
  UserGetById,
  UserUpdate,
  UserLogin,
  UserRegister,
} = require("../controllers/User");

router.route("/")
  .post(UserCreation)
  .get(UserGetAll);



router.route("/login")
  .post(UserLogin);

router.route("/register")
  .post(UserRegister);

router.route("/:id")
  .put(UserUpdate)
  .get(UserGetById);



module.exports = router;
