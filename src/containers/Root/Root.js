import React from 'react';
import App from '../../App';
import configureStore from '../../redux/configureStore';
import { Provider } from 'react-redux';

const Root = props => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root;