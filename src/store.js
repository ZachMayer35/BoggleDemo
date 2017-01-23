'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import boggleReducer from './components/boggle/reducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	boggle: boggleReducer
});

const middlewares = [thunkMiddleware];
const createLogger = require('redux-logger');
const logger = createLogger();
middlewares.push(logger);

const store = createStore(
	rootReducer,
	applyMiddleware(
		...middlewares
  )
);

export default store;
