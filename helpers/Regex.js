const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = {
  eg: /^(\+?20|0)?1[0-9]{9}$/,
};

module.exports = {
  emailRegex,
  phoneRegex,
};
