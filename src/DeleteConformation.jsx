// src/components/DeleteConfirmation.js
import React from "react";

const DeleteConfirmation = ({ onDelete, onCancel }) => {
  return (
    <div className="delete-modal">
      <h2>Are you sure you want to delete this book?</h2>
      <button onClick={onDelete}>Yes, Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteConfirmation;
