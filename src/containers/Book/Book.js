import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRead, removeBook } from '../../redux/actionCreators';
import classes from './Book.module.css';


function Book(props) {
  return (
    <div className={classes.BookCard}>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Pages: {props.pages}</p>
      <p>Read: {props.read ? 'Yes' : 'No'}</p>
      <button onClick={props.remove}>Delete</button>
      <button>Change Read Status</button>
    </div>
  );
}

export default Book;