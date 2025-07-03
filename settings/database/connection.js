const { Sequelize } = require("sequelize");
const host = process.env.DB_HOST;
const port = 554;
const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dialect = "postgres";

const sequelize = new Sequelize(database, username, password, {
  dialect: dialect,
  freezeTableName: true,
  underscored: true,
  schema: "public",
  host: host,
  port: port,
  omitNull: true,
  autoIncrement: true,
  logging: false,
  searchPath: "public",
  dialectOptions: {
    prependSearchPath: true,
  },

  pool: { max: 5, idle: 2000, min: 0, evict: 10000, acquire: 30000 },
});

module.exports = sequelize;
