import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
