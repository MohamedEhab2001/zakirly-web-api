const sequelize = require("./database/connection");
const assertDatabaseConnectionOk = async () => {
  console.log(`Checking database connection..`);
  try {
    await sequelize.authenticate();
    console.log("Sequelize has established DB connection successfully.");
    console.log(`Database connection OK!`);
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = [
  assertDatabaseConnectionOk,
];
