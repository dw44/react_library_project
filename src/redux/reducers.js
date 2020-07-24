/* eslint-disable no-fallthrough */
import * as types from './types';

// part after && in parens below should be removed when the 3 builtin book items are removed
export const initialState = (localStorage.length > 0 && localStorage.library !== '[]') ? [...JSON.parse(localStorage.library)] : [
  {id: 'c482f0f3-7a84-4c4d-bd60-feb7c9908351', title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke', pages: 448, read: true},
  {id: '71f6dc97-ae31-4140-a4f0-1068d180a018', title: 'CODE', 
    author: 'Charles Petzold', pages: 391, read: true},
  {id: 'ade67292-d0cd-4010-a6ac-25de9c4546fc', title: '30 Days of React',
    author: 'Avi Lerner', pages: 304, read: true}
]; // Emp

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