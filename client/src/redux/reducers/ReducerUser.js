import * as types from '../constants/ActionsTypes'

var initialState = {
    user : {},
    signUpSuccess: {},
    message: '',

}
const LoginReducer = (state = initialState, action) =>
{
switch(action.type) {

    case(types.LOGIN_ACTION):
    console.log(action.payload, '12345454')
        
        return {
                    ...state,
                user : action.payload
        }

    case(types.REGISTER_ACTION):
        console.log(action.payload,'123')
        return{
            ...state,
            signUpSuccess: action.payload
        }
    case(types.LOGIN_ACTION_FAILED):
    return{
        ...state,
        message: action.payload
    }
    case(types.REFRESH_MESSAGE):
    {
        return{
            ...state,
            message: ''
        }
    }
    
    
    default: return state;
    
    }
}
export default LoginReducer;