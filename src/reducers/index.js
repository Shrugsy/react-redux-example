// import all reducers here
import counter from './counter';
import isLogged from './isLogged';
import {combineReducers} from 'redux';

// these will be the names of each state item
const allReducers = combineReducers({
    counter,
    isLogged
})

export default allReducers;