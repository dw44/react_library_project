import * as types from './types';

export const addBook = book => ({
  type: types.ADD_BOOK,
  payload: book
})