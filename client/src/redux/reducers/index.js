import {combineReducers} from 'redux';
import LoginReducer from './ReducerUser'
import BlogPostReducer from './ReducerBlogPost'
const allReducers = combineReducers(
    {
       LoginReducer,
       BlogPostReducer
    }
)


export default allReducers;