import * as types from '../constants/ActionsTypes'

var initialState = {
    user : {},
    signUpSuccess: {}

}
const LoginReducer = (state = initialState, action) =>
{
switch(action.type) {

    case(types.LOGIN_ACTION):
        
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
    
    
    default: return state;
    
    }
}
export default LoginReducer;