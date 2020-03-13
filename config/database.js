const Sequelize = require('sequelize');

const database = new Sequelize('json_api_db', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    paranoid: true,
  },
  logging: false,
});

module.exports = database;
