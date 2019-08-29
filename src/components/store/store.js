import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import request from './reducers/request';

const reducer = combineReducers({
    request
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;