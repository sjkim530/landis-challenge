const Sequelize = require("sequelize");
const db = require("../db");

const Account = db.define("account", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  balance: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  credit: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  picture: {
    type: Sequelize.TEXT,
  },
  name_first: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name_last: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  employer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comments: {
    type: Sequelize.TEXT,
  },
});

module.exports = Account;
