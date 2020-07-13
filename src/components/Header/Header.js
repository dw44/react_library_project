import React from 'react';
import classes from './Header.module.css';

function Header() {
  return(
    <header className={classes.Header}>
      <h1 className={classes.Title}>The Odin Library</h1>
      <button 
        className={classes.AddBook}
        onClick={() => {}}
      >Add Book</button>
    </header>
  );
}

export default Header;