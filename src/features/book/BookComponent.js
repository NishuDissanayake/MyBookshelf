// src/features/book/BookComponent.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, deleteBook } from './bookSlice';
import './BookComponent.css';

const BooksComponent = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const [newBookTitle, setNewBookTitle] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title: newBookTitle,
    };
    dispatch(addBook(newBook));
    setNewBookTitle(''); 
  };

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook({ id: bookId }));
  };

  return (
    <div className="booksComponent">
      <h2>My Bookshelf</h2>
      <form onSubmit={handleAddBook} className="bookForm">
        <input
          type="text"
          placeholder="Enter book title"
          className="bookInput"
          value={newBookTitle}
          onChange={(e) => setNewBookTitle(e.target.value)}
        />
        <button type="submit" className="addBookButton">Add Book</button>
      </form>
      <ul className="booksList">
        {books.map((book) => (
          <li key={book.id} className="bookItem">
            {book.title}
            <button onClick={() => handleDeleteBook(book.id)} className="deleteButton">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksComponent;