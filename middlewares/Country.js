const Country = (req, res , next) => {
    const country = req.headers["x-country"];
    req.country = country;
    next();
}
module.exports = Country;
  