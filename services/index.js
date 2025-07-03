const { badRequest } = require("../helpers/Errors");

class Service {
  constructor(data, id, model) {
    this.data = data;
    this.id = id;
    this.model = model;
  }

  _checkIfIdProvided() {
    if (!this.id) {
      throw new badRequest("No id has provided");
    }
  }

  /**
   *
   * @param {*} key optional
   * @param {*} keys optional
   * @description if the key provided it checks if the data object has already this key
   */
  _checkIfDataProvided(key = null, keys = null) {
    // I am checking if the value == undefined because some cases the values may be 0,false or null

    if (!this.data || !Object.keys(this.data).length) {
      throw new badRequest("No data has provided");
    }
    if (key) {
      if (this.data[key] === undefined) {
        throw new badRequest(`Cannot proceed without ${key} key`);
      }
    }
    if (keys) {
      keys.forEach((key) => {
        if (this.data[key] === undefined) {
          throw new badRequest(`Cannot proceed without ${key} key`);
        }
      });
    }
  }

  /**
   *
   * @param {*} arr
   * @description it pasrses the array if it comes from the client side stringfied
   * @returns Array
   */
  _returnArray(arr) {
    if (!(arr instanceof Array)) {
      return JSON.parse(arr);
    }
    return arr;
  }
}

module.exports = Service;
