import React from 'react';
import Header from './components/Header/Header';
import Book from './containers/Book/Book';
import Books from './containers/Books/Books';
import AddBook from './components/AddBook/AddBook';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
    </div>
  );
}

export default App;
