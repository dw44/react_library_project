import React from 'react';
import Header from './components/Header/Header';
import Book from './containers/Book/Book';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Book
        title="Eloquent Javascript"
        author="Marijn Haverbeke"
        pages="444"
      />
    </div>
  );
}

export default App;
