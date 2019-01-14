import * as types from '../constants/ActionsTypes';
import {loginUser,registerUser} from '../../APIs/usersAPI'
const actionLogin = (data) =>
{   

    return  {
        type : types.LOGIN_ACTION,
        payload : data
    }
}

export const loadUser =  (dispatch)=> {
    return async (username, password)=> {
            console.log(username,"action");
            
            let data = await loginUser(username,password)
            console.log(data,'return data');
            
            dispatch(actionLogin(data))
            
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