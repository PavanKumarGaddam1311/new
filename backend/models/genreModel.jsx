// backend/models/genreModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Genre = sequelize.define('Genre', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Genre;
