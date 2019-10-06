import { createStore, applyMiddleware } from 'redux';
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

export default store;
