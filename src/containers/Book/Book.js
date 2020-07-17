import { render } from '@testing-library/react';
import React, { Component } from 'react';
import classes from './Book.module.css';


class Book extends Component {
  state = {
    read: this.props.read
  }

  changeReadStatus = () => {
    this.setState({
      read: !this.state.read
    })
  }

  render() {
    return (
      <div className={classes.BookCard}>
        <p>Title: {this.props.title}</p>
        <p>Author: {this.props.author}</p>
        <p>Pages: {this.props.pages}</p>
        <p>Read: {this.state.read ? "Yes" : "No"}</p>
        <button onClick={() => {}} className="book-card-button">Delete Book</button>
        <button className="book-card-button"
          onClick={() => this.changeReadStatus}
        >Change Read Status</button>
      </div>
    );
  }
}

export default Book;