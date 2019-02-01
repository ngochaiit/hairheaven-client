import * as types from '../constants/ActionsTypes';
import {loginUser,registerUser, showAllPost, DeletePost} from '../../APIs/usersAPI'
import * as messages from '../constants/Message'
const actionLogin = (data) =>
{   

    return  {
        type : types.LOGIN_ACTION,
        payload : data
    }
}

const MessageLogin = () =>
{
    return {
        type: types.LOGIN_ACTION_FAILED,
        payload : messages.LOGIN_SUCCESS_FAILED
    }
}
const refreshMessage =() => {
    return{
        type: types.REFRESH_MESSAGE,
    }
}

export const loadUser =  (dispatch)=> {
    return async (username, password)=> {
            console.log(username,"action");
           
            
            let data = await loginUser(username,password)
            console.log(data,'return data');
            if(data.result === true)
            {
              dispatch(actionLogin(data))
                
            }
            else{
               await dispatch(MessageLogin())
                setTimeout(() =>
        {
            dispatch(refreshMessage())
        }, 2000) 
            }
         
            
            
    }
}
const actionRegister = (data) =>
{
    return{
            type: types.REGISTER_ACTION,
            payload: data
    }

}


export const signUpUser = (dispatch) =>
{
    return async (name, email, password) =>
    {
        let signUp = await registerUser(name, email, password)
        console.log(signUp)
        dispatch(actionRegister(signUp))
        
    }
    
}

const posts = (data) =>
{
    return {
        type: types.SHOW_ALL_POST,
        payload: data
    }
}
export const showBlogPost = (dispatch) =>
{
  return async () =>
  {
    let listPosts = await showAllPost();
    dispatch(posts(listPosts))
  } 
}




const notify = () =>
{
    return{
        type: types.DELETE_A_BLOGPOST_SUCCESS,
        payload: messages.REMOVE_BLOGPOST_SUCCESS
    }
}

export const deleteABlogPost = (dispatch) =>
{
  return async (id, tokenKey) =>
  {
    let removeBlogPost =  await DeletePost(id, tokenKey);
    if(removeBlogPost.result === true)
    {
        dispatch(notify());
        setTimeout(() =>
        {
            dispatch(refreshMessage())
        }, 5000) 
        
    }
    let listPosts = await showAllPost();
    console.log(listPosts,'banh kep bong lan ')
    dispatch(posts(listPosts))
  } 
}

