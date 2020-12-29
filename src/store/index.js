import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';

import authreducers from '../reducers/authreducers'

const reducer = combineReducers({
    auth: authreducers,
})

const middleware = composeWithDevTools(applyMiddleware(...[thunkMiddleware]));

export const store = createStore(reducer, middleware);