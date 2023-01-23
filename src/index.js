import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const feeling = (state = null, action) => {
  if (action.type === 'SUBMIT_FEELING') {
    return action.payload;
  };
  return state;
};
// Reducer for submitting feeling rating

const understanding = (state = null, action) => {
  if (action.type === 'SUBMIT_UNDERSTANDING') {
    return action.payload;
  };
  return state;
};
// Reducer for submitting understanding rating

const support = (state = null, action) => {
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
