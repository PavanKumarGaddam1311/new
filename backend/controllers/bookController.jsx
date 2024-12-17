// backend/controllers/bookController.js
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');
const Genre = require('../models/genreModel');

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [Author, Genre],
    });
    res.json(books);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: [Author, Genre],
    });
    if (!book) return res.status(404).send({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const { Title, AuthorID, GenreID, Pages, PublishedDate } = req.body;
    const newBook = await Book.create({ Title, AuthorID, GenreID, Pages, PublishedDate });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update an existing book
exports.updateBook = async (req, res) => {
  try {
    const { Title, AuthorID, GenreID, Pages, PublishedDate } = req.body;
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).send({ message: 'Book not found' });

    book.Title = Title;
    book.AuthorID = AuthorID;
    book.GenreID = GenreID;
    book.Pages = Pages;
    book.PublishedDate = PublishedDate;

    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).send({ message: 'Book not found' });

    await book.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
