/* eslint-disable no-fallthrough */
import * as types from './types';

export const initialState = [
  // load initial state from local storage
  ...Object.keys(localStorage).map(key => JSON.parse(localStorage[key]))
];

const addHandler = (state, action) => {
  state.concat([action.payload]);
  localStorage.setItem(action.payload.id, JSON.stringify(action.payload));
  console.log(state);
  console.log(localStorage);
  console.log(JSON.parse(localStorage[action.payload.id]));
  return state;
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_BOOK:
      addHandler(state, action);  
		default:
			return state;	
	}
}