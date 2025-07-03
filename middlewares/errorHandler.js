const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({
    type: err.constructor.name,
    msg:
      err.constructor.name == "ForeignKeyConstraintError"
        ? `Error in ids at ${err.index}`
        : err.message,
    fixIt: err.howToFix,
  });
};

module.exports = errorHandlerMiddleware;
