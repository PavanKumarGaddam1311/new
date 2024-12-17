// src/components/AddBook.js
import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [pages, setPages] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/books", {
      title,
      authorID: author,
      genreID: genre,
      pages,
      publishedDate,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Pages"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />
      <input
        type="date"
        value={publishedDate}
        onChange={(e) => setPublishedDate(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
