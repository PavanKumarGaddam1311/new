import React, { useState, useEffect } from "react";

const BookList = ({ books: initialBooks = [] }) => {
  const [books, setBooks] = useState(initialBooks); // Initialize with props or an empty array
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (initialBooks.length === 0) {
      // Fetch books if no initial data is passed
      setLoading(true);
      fetch("https://api.example.com/books")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch books.");
          }
          return response.json();
        })
        .then((data) => setBooks(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, [initialBooks]);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Book List</h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookList;
