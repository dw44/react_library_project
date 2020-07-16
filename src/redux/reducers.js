import * as types from './types';

export const initialState = [
  // {
  //   id: 7725,
  //   title: 'Eloquent Javascript',
  //   author: 'Marijn Haverbeke',
  //   pages: '448',
  //   read: false,
  // },
  // {
  //   id: 8610,
  //   title: 'CODE',
  //   author: 'Charles Petzold',
  //   pages: '390',
  //   read: false,
  // },
  // {
  //   id: 4788,
  //   title: '30 Days of React',
  //   author: 'Avi Lerner',
  //   pages: '320',
  //   read: true,
  // }
];

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_BOOK:
      state.push(action.payload);
      console.log(state);
      return state;
		default:
			return state;	
	}
}