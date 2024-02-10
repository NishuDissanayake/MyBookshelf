// src/features/book/bookSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      // Directly mutating the state is safe inside createSlice thanks to Immer
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      // Filter out the book to delete
      return state.filter(book => book.id !== action.payload.id);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
