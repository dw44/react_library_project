import React, { useState } from 'react';
import Book from '../Book/Book';
import classes from './Books.module.css';

const dummyBookData = [
  {
    id: 7725,
    title: 'Eloquent Javascript',
    author: 'Marijn Haverbeke',
    pages: '448',
    read: false,
  },
  {
    id: 8610,
    title: 'CODE',
    author: 'Charles Petzold',
    pages: '390',
    read: false,
  },
  {
    id: 4788,
    title: '30 Days of React',
    author: 'Avi Lerner',
    pages: '320',
    read: true,
  }
]

function Books() {
  const bookList = dummyBookData.map(book => (
    <Book 
      id={book.id}
      title={book.title}
      author={book.author}
      pages={book.pages}
      read={book.read}
    />
  )) 
  return (
    <div className={classes.Books}>
     {bookList}
    </div>
  );
}


export default Books;
