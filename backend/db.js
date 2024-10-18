const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB,        
  process.env.user,
  process.env.PWD,
  {
    host: process.env.HOST,
    dialect: 'postgres',
    port:process.env.port
  }
);
module.exports = sequelize; 
