import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import galleriesReducer from './Reducers/galleriesReducer.js';
import artsReducer from './Reducers/artsReducer.js';
import { combineReducers } from 'redux';
import { BrowserRouter } from "react-router-dom";

const allReducers = combineReducers({
  galleriesReducer,
  artsReducer,
})

const store = createStore(allReducers, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
