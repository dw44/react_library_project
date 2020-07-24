import React from 'react';
import classes from './Book.module.css';


const Book = props => {
  return (
    <div className={classes.BookCard}>
      <p className={classes.BookAttribute}>{props.title}</p>
      <p className={classes.BookAttribute}><span className={classes.by}>by</span> {props.author}</p>
      <p>Read: {(props.read === true || props.read === 'true') ? 'Yes' : 'No'}</p>
      <button className={classes.Button} onClick={props.remove}>Delete</button>
      <button className={classes.Button} onClick={props.changeRead}>Change Read Status</button>
    </div>
  );
}

export default Book;