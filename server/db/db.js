const Sequelize = require("sequelize");
const pkg = require("../../package-lock.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false,
    dialectOptions: {
      ssl: true,
    },
    ssl: true,
  }
);
module.exports = db;
