import { render } from '@testing-library/react';
import React, { Component } from 'react';
import classes from './Book.module.css';


class Book extends Component {

  render() {
    return (
      <div className={classes.BookCard}>
      {/* //   <p>Title: {props.title}</p>
      //   <p>Author: {props.author}</p>
      //   <p>Pages: {props.pages}</p>
      //   <p>Read: {readStatus ? "Yes" : "No"}</p>
      //   <p>Index: {props.index}</p>
      //   <button onClick={props.remove} className="book-card-button">Delete Book</button>
      //   <button className="book-card-button"
      //     onClick={() => setReadStatus(!readStatus)}
      //   >Change Read Status</button> */}
      </div>
    );
  }
}

export default Book;