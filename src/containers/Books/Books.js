import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../Book/Book';
import classes from './Books.module.css';

class Books extends Component {

  render() {
    return (
      <div className={classes.Books}>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: [...state]
  };
}

export default connect(mapStateToProps)(Books);
