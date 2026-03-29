const Country = (req, res, next) => {
    const country = req.headers["x-country"];
    const admin = req.headers["x-admin"];
    req.country = country;
    req.admin = admin;
    next();
}
module.exports = Country;
