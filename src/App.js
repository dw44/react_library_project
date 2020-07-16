import React, { Component } from 'react';
import Header from './components/Header/Header';
import Books from './containers/Books/Books';
import AddBook from './components/AddBook/AddBook';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddBook />
      </div>
    );
  }  
}

export default App;
