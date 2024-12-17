// src/components/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookList from "./BookList";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const fetchBooks = async () => {
    const response = await axios.get("/api/books", {
      params: {
        title: searchQuery,
        author: selectedAuthor,
        genre: selectedGenre,
      },
    });
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, [searchQuery, selectedAuthor, selectedGenre]);

  return (
    <div>
      <h1>Search Books</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by author"
        value={selectedAuthor}
        onChange={(e) => setSelectedAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by genre"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      />
      <button onClick={fetchBooks}>Search</button>

      <BookList books={books} />
    </div>
  );
};

export default Home;
