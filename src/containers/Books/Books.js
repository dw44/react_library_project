import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeBook, changeRead } from '../../redux/actionCreators';
import Book from '../../components/Book/Book';
import classes from './Books.module.css';

class Books extends Component {
  render() {
    const books = this.props.books.map(book => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        pages={book.pages}
        read={book.read}
        changeRead={() => this.props.changeStatus(book.id)}
        remove={() => this.props.deleteBook(book.id)}
      />
    ));
    return (
      <div className={classes.Books}>
        {books}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    changeStatus: id => dispatch(changeRead(id)),
    deleteBook: id => dispatch(removeBook(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
