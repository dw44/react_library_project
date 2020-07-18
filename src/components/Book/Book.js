import React from 'react';
import classes from './Book.module.css';


const Book = props => {
  return (
    <div className={classes.BookCard}>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Pages: {props.pages}</p>
      <p>Read: {(props.read === true || props.read === 'true') ? 'Yes' : 'No'}</p>
      <button onClick={props.remove}>Delete</button>
      <button onClick={props.changeRead}>Change Read Status</button>
    </div>
  );
}

export default Book;