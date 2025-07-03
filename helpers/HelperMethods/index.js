const jwt = require("jsonwebtoken");
const { badRequest, internalServer } = require("../Errors");
const { Op } = require("sequelize");

const generateToken = (obj, expries_in = "10d") => {
  const token = jwt.sign({ ...obj }, process.env.JWT_SECRET, {
    expiresIn: expries_in,
  });
  return token;
};

const makeQuerySearchReady = (query) => {
  const queryArray = query.split(" ");
  const queryArrayWithAstric = queryArray.map((word) => word + ":*");
  const queryWithAndOperator = queryArrayWithAstric.join(" & ");
  return queryWithAndOperator;
};

/**
 *
 * @param  condition Boolean expression
 * @param  msg Error meeage
 * @param  fix How to fix message
 * @param  trans Transaction object to rollback
 */
const TransactionError = async (condition, msg, fix, trans) => {
  if (condition) {
    await trans.rollback();
    throw new badRequest(msg, fix);
  }
};

/**
 *
 * @param {*} obj
 * @description Delete any undefined OR -1 values from the object
 * @returns
 */
const cleanObject = (obj) => {
  for (key in obj) {
    if (!obj[key] || obj[key] == -1 || obj[key] == "undefined") {
      delete obj[key];
    }
  }
  return { ...obj };
};

/**
 *
 * @param {*} obj The object to be modified
 * @param {*} keys [List of strings] The named keys to be extracted
 * @description Extract specific keys from object and delete these keys from that object NOTE : it modifies the original object
 * @returns
 */
const extractKeys = (obj, keys) => {
  let keysValues = [];
  for (let i = 0; i < keys.length; i++) {
    if (obj?.hasOwnProperty(keys[i])) {
      keysValues.push(obj[keys[i]]);
      delete obj[keys[i]];
    } else {
      keysValues.push(undefined);
    }
  }
  return keysValues;
};

/**
 *
 * @param  length integer that determine the length of generated text
 * @param  key determine the type of the id (c: captial , s: small , n: numbers , m: mix)
 * @description genrating unique text
 * @returns
 */
const makeid = (length, type) => {
  let result = "";
  const characterTypes = {
    c: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    s: "abcdefghijklmnopqrstuvwxyz0123456789",
    n: "0123456789",
    m: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  };
  const characters = characterTypes[type];
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

/**
 *
 * @param {*} token
 * @param {*} secretKey
 * @returns
 */
const decodeAndVerifyJwt = (token) => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid token format");
    }

    const payload = JSON.parse(
      Buffer.from(parts[1], "base64").toString("utf8")
    );

    return payload;
  } catch (error) {
    console.error("Error decoding and verifying token:", error);
    return null;
  }
};

/**
 * Get all function names (methods) implemented in a class.
 *
 * @param {Function} classType - The class from which to retrieve the methods.
 * @returns {string[]} An array of method names implemented in the class.
 */
const getClassMethods = (classType) => {
  return Object.getOwnPropertyNames(classType.prototype).filter(
    (property) =>
      typeof classType.prototype[property] === "function" &&
      property !== "constructor"
  );
};

/**
 * Compare the methods of two classes.
 * Throws an error if the second class does not have all the methods of the first class.
 *
 * @param {Function} class1 - The reference class whose methods will be compared.
 * @param {Function} class2 - The class to compare against the reference class.
 * @throws Will throw an error if any method from class1 is missing in class2.
 */
const compareClassMethods = (class1, class2) => {
  const methodsClass1 = getClassMethods(class1);
  const methodsClass2 = getClassMethods(class2);

  const missingMethods = methodsClass1.filter(
    (method) => !methodsClass2.includes(method)
  );

  if (missingMethods.length > 0) {
    throw new internalServer(
      `The following methods are missing in ${
        class2.name
      }: ${missingMethods.join(", ")}`
    );
  }
};

/**
 *
 * @param {*} query
 * @description This function allow advanced querying to be excuted inside sequalize
 */
const prepareQueryObject = (query) => {
  const conditionObject = {};
  Object.entries(query).forEach(([key, value]) => {
    const type = typeof value;
    switch (type) {
      case "string":
        conditionObject[key] = value;
        break;
      case "object":
        const valueKey = Object.keys(value)[0];
        conditionObject[key] = {
          [Op[valueKey]]: value[valueKey],
        };
        break;
    }
  });
  return conditionObject;
};

module.exports = {
  generateToken,
  makeQuerySearchReady,
  TransactionError,
  cleanObject,
  extractKeys,
  makeid,
  decodeAndVerifyJwt,
  compareClassMethods,
  prepareQueryObject,
};
