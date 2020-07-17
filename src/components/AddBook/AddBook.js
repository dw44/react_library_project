import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../redux/actionCreators';
import classes from './AddBook.module.css';

class AddBook extends Component {
  state = {
    id: Math.floor(Math.random() * 9999),
    title: '',
    author: '',
    pages: 1,
    read: false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.add({...this.state});
    this.setState({
      id: Math.floor(Math.random() * 9999),
      title: '',
      author: '',
      pages: 1,
      read: false
    });
    document.querySelector('#yes').checked = false;
    document.querySelector('#no').checked = false;
  }

  render() {
    return (
      <form className={classes.Form} onSubmit={this.handleSubmit}>
        <div className={classes.FormElement}>
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            onChange={e => this.setState({title: e.target.value})} 
            value={this.state.title} 
            required/>
        </div>
        <div className={classes.FormElement}>
          <label htmlFor="author">Author</label>
          <input 
            type="text" 
            id="author" 
            onChange={e => this.setState({author: e.target.value})} 
            value={this.state.author} 
            required/>
        </div>
        <div className={classes.FormElement}>
          <label htmlFor="pages">Title</label>
          <input 
            type="number" 
            id="pages" 
            min="1" 
            onChange={e => this.setState({pages: e.target.value})} 
            value={this.state.pages} 
            required/>
        </div>
        <div className={classes.Radio}>
            <p>Read?</p>
            <label htmlFor="yes">Yes</label>
            <input 
              type="radio" 
              name="read" 
              id="yes" 
              value={true} 
              onChange={e => this.setState({read: e.target.value})}
              required/>
            <label htmlFor="no">No</label>
            <input 
              type="radio" 
              name="read" 
              id="no" 
              value={false}
              onChange={e => this.setState({read: e.target.value})}
              required/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: book => dispatch(addBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
