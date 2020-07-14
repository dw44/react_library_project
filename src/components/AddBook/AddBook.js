import React from 'react';
import classes from './AddBook.module.css';

function AddBook() {
  const book = {
    id: Math.floor(Math.random() * 9999),
    title: null,
    author: null,
    pages: null,
    read: null
  }

  const changeHandler = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    book[[name]] = value;

  }

  const resetBook = () => {
    Object.keys(book).forEach(key => {
      if (key === 'id') {
        book[key] = Math.floor(Math.random() * 9999);
      } else {
        book[key] = null;
      }
    })
  }

  const formHandler = event => {
    event.preventDefault();
    console.log(book);
    resetBook();
    console.log(book);
  }

  return (
    <div className={classes.FormContainer}>
      <form className={classes.Form}>
        <input type="text" name="title" id="title" placeholder="Title" onChange={changeHandler} required />
        <input type="text" name="author" id="author" placeholder="Author" onChange={changeHandler} required />
        <input type="number" min="1" name="pages" id="pages" placeholder="Pages" onChange={changeHandler} required />
        <input type="radio" id="yes" name="read" value={true} onChange={changeHandler}/>
        <input type="radio" id="no" name="read" value={false} onChange={changeHandler}/>
        {/* <select name="read" id="read-book" onChange={changeHandler}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select> */}
        <button onClick={formHandler}>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook;
