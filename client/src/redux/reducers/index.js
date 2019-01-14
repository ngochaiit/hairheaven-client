import {combineReducers} from 'redux';
import LoginReducer from './ReducerUser'
const allReducers = combineReducers(
    {
       LoginReducer
    }
)


export default allReducers;