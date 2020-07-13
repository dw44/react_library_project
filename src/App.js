import React from 'react';
import Book from './containers/Book/Book';
import './App.css';

function App() {
  return (
    <div className="App">
      <Book
        title="Eloquent Javascript"
        author="Marijn Haverbeke"
        pages="444"
      />
    </div>
  );
}

export default App;
