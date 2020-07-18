import * as types from './types';

export const addBook = book => ({
  type: types.ADD_BOOK,
  payload: {...book}
});

export const removeBook = id => ({
  type: types.REMOVE_BOOK,
  payload: id
});

export const changeRead = id => ({
  type: types.CHANGE_READ_STATUS,
  payload: id
});