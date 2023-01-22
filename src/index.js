import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feeling = (state = 0, action) => {
  if (action.type === 'SUBMIT_FEELING') {
    return action.payload;
  };
  return state;
};
// Reducer for submitting feeling rating

const understanding = (state = 0, action) => {
  if (action.type === 'SUBMIT_UNDERSTANDING') {
    return action.payload;
  };
  return state;
};
// Reducer for submitting understanding rating

const support = (state = 0, action) => {
  if (action.type === 'SUBMIT_SUPPORT') {
    return action.payload;
  };
  return state;
};
// Reducer for submitting support rating

const comments = (state = '', action) => {
  if (action.type === 'SUBMIT_COMMENTS') {
    return action.payload;
  };
  return state;
};
// Reducer for submitting comments

const store = createStore(
  combineReducers({
    feeling,
    understanding,
    support,
    comments
  }),
  applyMiddleware(
    logger
  )
)
// Creates a store through which components can access and update states

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// Provides App.js and it's components access to states and reducers
registerServiceWorker();
