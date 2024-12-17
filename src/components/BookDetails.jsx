// src/components/BookDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const BookDetails = ({ match }) => {
  const [book, setBook] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await axios.get(`/api/books/${id}`);
      setBook(response.data);
    };
    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.Title}</h1>
      <p>Author: {book.Author.Name}</p>
      <p>Genre: {book.Genre.Name}</p>
      <p>Pages: {book.Pages}</p>
      <p>Published Date: {book.PublishedDate}</p>
    </div>
  );
};

export default BookDetails;
