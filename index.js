require("dotenv").config();
require("express-async-errors");
const xss = require("xss-clean");

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const compresiion = require("compression");
const setUpArray = require("./settings/setUp");
const Server = require("./settings/server");
const useRoutes = require("./routes");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const uploadImage = require("./middlewares/uploadImages");
const multer_upload = require("./thirdParties/Multer/set");
const Country = require("./middlewares/Country");

const port = process.env.PORT || 7000;

// Middlewares
app.use(xss());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compresiion());
app.use(cors());
app.use(morgan("tiny"));

app.use(multer_upload.any(), uploadImage);
app.use(Country);
useRoutes(app);

app.use(notFound);
app.use(errorHandlerMiddleware);
Server.fireServer(app, port, setUpArray);
