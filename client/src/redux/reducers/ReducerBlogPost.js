import * as types from '../constants/ActionsTypes'

var initialState = {
    blogPosts: [],
    message: ''

}                                                                                                                                                                                                          
const BlogPostReducer = (state = initialState, action) =>
{
switch(action.type) {

    case(types.SHOW_ALL_POST):
        
        return {
                    ...state,
                blogPosts : action.payload,

        }
        
    case(types.DELETE_A_BLOGPOST_SUCCESS):
    {
        return{
            ...state,
            message: action.payload
        }
    }
    case(types.REFRESH_MESSAGE):
    {
        return{
            ...state,
            message: ""
        }
    }
    
    
    
    default: return state;
    
    }
}
export default BlogPostReducer;