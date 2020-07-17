import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../Book/Book';
import classes from './Books.module.css';

class Books extends Component {
  state = {
    total: this.props.books.length
  }

  render() {
    return (
      <div className={classes.Books}>
        {this.props.books.map(book => 
          <Book 
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            pages={book.pages}
            read={book.read === 'true' ? true : false}
          />  
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: [...state],
    total: state.length
  };
}

export default connect(mapStateToProps)(Books);
