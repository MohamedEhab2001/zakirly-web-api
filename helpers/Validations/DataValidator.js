const { badRequest } = require("../Errors");
const { emailRegex, phoneRegex } = require("../Regex");

class DataValidator {
  #value;
  constructor(value) {
    if (value) {
      this.#value = value;
    } else {
      throw new badRequest("Value cannot be null", "Data class");
    }
  }

  isString() {
    if (typeof this.#value === "string") {
      return this.#value.trim();
    }
    throw new badRequest("Value is not string", "Data class");
  }
  isEmail() {
    if (this.isString(this.#value)) {
      if (emailRegex.test(this.#value)) {
        return this.#value.trim();
      }
      throw new badRequest("Value is not email", "Data class");
    }
  }
  isPhone(country) {
    if (this.isString(this.#value)) {
      if (phoneRegex[country].test(this.#value)) {
        return this.#value.trim();
      }
      throw new badRequest(`Value is not ${country} phone`, "Data class");
    }
  }
}
module.exports = DataValidator;
