/* eslint-disable no-fallthrough */
import * as types from './types';

export const initialState = [
  {
    id: 1234,
    title: 'Harry Potter',
    author: 'JKR',
    pages: 260,
    read: true
  },
  {
    id: 5678,
    title: 'Fellowship of the Ring',
    author: 'JRRT',
    pages: 500,
    read: false,
  }
];

const addHandler = (state, action) => { 
  // TODO
  return [...state, action.payload];
}

const removeHandler = (state, action) => {
  console.log(action);
  return state.filter(book => book.id !== action.payload);
}

const editReadStatusHandler = (state, action) => {
  
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_BOOK:
      return addHandler(state, action);
    case types.REMOVE_BOOK:
      return removeHandler(state, action);
    case types.CHANGE_READ_STATUS:
      return editReadStatusHandler(state, action);
		default:
			return state;	
	}
}