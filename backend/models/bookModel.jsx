// backend/models/bookModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Author = require('./authorModel');
const Genre = require('./genreModel');

const Book = sequelize.define('Book', {
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Pages: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PublishedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Book.belongsTo(Author);
Book.belongsTo(Genre);

module.exports = Book;
