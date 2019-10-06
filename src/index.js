import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App.js'
import {promiseMiddleware} from './middleware';

const defaultState = {appName: 'CONDUIT', articles: null};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {...state, checked: !state.checked};

    case 'HOME_PAGE_LOADED':
      return {...state, articles: action.payload.articles}
    default: return state;
  }
}

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
