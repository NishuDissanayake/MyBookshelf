import React from 'react';
import './App.css';
import BooksComponent from './features/book/BookComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BooksComponent />
      </header>
    </div>
  );
}

export default App;