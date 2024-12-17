// src/components/EditBook.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditBook = ({ match }) => {
  const [book, setBook] = useState({});
  const { id } = match.params;

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`/api/books/${id}`);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/books/${id}`, book);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={book.Title || ""}
        onChange={(e) => setBook({ ...book, Title: e.target.value })}
      />
      <input
        type="text"
        value={book.Author?.Name || ""}
        onChange={(e) => setBook({ ...book, Author: { Name: e.target.value } })}
      />
      <input
        type="text"
        value={book.Genre?.Name || ""}
        onChange={(e) => setBook({ ...book, Genre: { Name: e.target.value } })}
      />
      <input
        type="number"
        value={book.Pages || ""}
        onChange={(e) => setBook({ ...book, Pages: e.target.value })}
      />
      <input
        type="date"
        value={book.PublishedDate || ""}
        onChange={(e) => setBook({ ...book, PublishedDate: e.target.value })}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditBook;
