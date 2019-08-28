import { createStore, combineReducers } from 'redux';
import request from './reducers/request';

const reducer = combineReducers({
    request
});

const store = createStore(reducer);

export default store;