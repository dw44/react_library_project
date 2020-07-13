import React from 'react';
import { useState } from 'react';

function Book(props) {
  const [readStatus, setReadStatus] = useState(false);

  return (
    <div className="book-card">
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Pages: {props.pages}</p>
      <p>Read: {readStatus ? "Yes" : "No"}</p>
      <button className="book-card-button">Delete Book</button>
      <button className="book-card-button"
        onClick={() => setReadStatus(!readStatus)}
      >Change Read Status</button>
    </div>
  );
}

export default Book;