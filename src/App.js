import React, { Component } from 'react';
import Header from './components/Header/Header';
import Books from './components/Books/Books';
import AddBook from './components/AddBook/AddBook';

class App extends Component {
  state = {
    showForm: false
  }

  toggleFormDisplay() {
    this.setState(prevState => {
      return {showForm: !prevState.showForm}
    });
  }

  render() {
    return (
      <div className="App">
        <Header 
          toggleForm={() => this.toggleFormDisplay()}
          formVisible={this.state.showForm}  
        />
        {this.state.showForm ? <AddBook hideForm={this.toggleFormDisplay.bind(this)} /> : null}
        <Books />
      </div>
    );
  }  
}

export default App;
