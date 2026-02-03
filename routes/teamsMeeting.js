
const express = require("express");
const router = express.Router();
const {
    bookSession
} = require("../controllers/Microsoft/booking");

router.route("/")
  .post(bookSession)
  
module.exports = router;
