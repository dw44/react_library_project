import React from 'react';
import classes from './AddBook.module.css';

function AddBook() {
  const book = {
    id: Math.floor(Math.random() * 9999),
    title: '',
    author: '',
    pages: 0,
    read: false
  }

  const changeHandler = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    book[[name]] = value;

  }

  const formHandler = event => {
    event.preventDefault();
    console.log(book);
  }

  return (
    <div className={classes.FormContainer}>
      <form className={classes.Form}>
        <input type="text" name="title" id="title" placeholder="Title" onChange={changeHandler} required />
        <input type="text" name="author" id="author" placeholder="Author" onChange={changeHandler} required />
        <input type="number" min="1" name="pages" id="pages" placeholder="Pages" onChange={changeHandler} required />
        <select name="read-book" id="read-book" onChange={changeHandler}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button onClick={formHandler}>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook;
