const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import the Sequelize instance

const participant = sequelize.define(
  'participants',
   {
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Instead of `required`
      unique: true,
      lowercase: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    role: {
      type: DataTypes.ARRAY(DataTypes.STRING), // ARRAY must specify type
      allowNull: false,
      defaultValue: ['participant'], // Use `defaultValue` instead of `default`
    },
  }
);

// Check if the model is registered correctly
console.log(participant === sequelize.models.participants);

module.exports = participant;
