import * as types from '../constants/ActionsTypes'

var initialState = {
    blogPosts: [],
    message: '',
    detailPosts:[]

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
    case(types.LOAD_BLOGPOST_ACTION):
    {
        return{
            ...state,
            detailPosts: action.payload

        }
    }
    
    
    
    default: return state;
    
    }
}
export default BlogPostReducer;