/* eslint-disable no-fallthrough */
import * as types from './types';

export const initialState = (localStorage.length > 0) ? [...JSON.parse(localStorage.library)] : [];

const updateLocalStorage = library => {
  localStorage.clear();
  localStorage.setItem('library', JSON.stringify(library));
}

const addHandler = (state, action) => {
  const updatedState = [...state, action.payload]; 
  updateLocalStorage(updatedState);
  return updatedState;
}

const removeHandler = (state, action) => {
  const updatedState = state.filter(book => book.id !== action.payload); 
  updateLocalStorage(updatedState);
  return updatedState;
}

const editReadStatusHandler = (state, action) => {
  const updatedState = [...state];
  updatedState.forEach(book => {
    if (book.id === action.payload) {
      book.read = !book.read;
    }
  });
  updateLocalStorage(updatedState);
  return updatedState;
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