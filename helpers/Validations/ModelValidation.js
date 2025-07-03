const { badRequest } = require("../Errors");
class ModelValidation {
  #model;
  constructor(model) {
    this.#model = model;
  }

  /**
   *
   * @param {Object} body
   * @param {Array} arrOfIgnore
   */
  ModelKeysValidate = (body, arrOfIgnore = []) => {
    const noNeed = [
      "id",
      "created_at",
      "updated_at",
      "createdAt",
      "updatedAt",
      ...arrOfIgnore,
    ];
    const attributesKeys = Object.keys({ ...this.#model.getAttributes() });
    attributesKeys.forEach((key) => {
      if (!noNeed.includes(key) && !(key in body)) {
        throw new badRequest("Provide data", `cannot find ${key} in the JSON`);
      }
    });
  };
}

module.exports = ModelValidation;
