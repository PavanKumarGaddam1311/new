// backend/models/authorModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Author = sequelize.define('Author', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Author;
