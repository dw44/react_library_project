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

  const validate = () => {
    if (Object.keys(book).some(key => book[key] === null)) {
      return false;
    }
    return true;
  }

  const formHandler = event => {
    if (validate()) {
      event.preventDefault();
      console.log(book);
      resetBook();
      console.log(book);
    } else {
      console.log(event.target.children);
      event.preventDefault();
      resetBook();
    }    
  }

  return (
    <div className={classes.FormContainer}>
      <form className={classes.Form} onSubmit={formHandler}>
        <input type="text" name="title" id="title" placeholder="Title" onChange={changeHandler} required />
        <input type="text" name="author" id="author" placeholder="Author" onChange={changeHandler} required />
        <input type="number" min="1" name="pages" id="pages" placeholder="Pages" onChange={changeHandler} required />
        <input type="radio" id="yes" name="read" value={true} onChange={changeHandler}/>
        <input type="radio" id="no" name="read" value={false} onChange={changeHandler}/>
        <button>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook;
