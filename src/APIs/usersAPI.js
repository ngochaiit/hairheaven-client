 /*
Goi cac API dang nhap, dang ki USER. 
*/

import {
    SERVER_NAME,
    SERVER_PORT,
    APIResponse
} from './apiParameters'

import fetch from 'node-fetch';
// /http://localhost:3000/users/registerUser
//http://localhost:3000/users/login

const API_REGISTER_USER = `${SERVER_NAME}:${SERVER_PORT}/users/registerUser`
const API_LOGIN_USER = `${SERVER_NAME}:${SERVER_PORT}/users/login`
console.log(API_REGISTER_USER);

export const registerUser = async (name, email, password) =>
{
    try{
        let response = await fetch(API_REGISTER_USER, {
            method: 'POST',
            body: `name=${name}&email=${email}&password=${password}`,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',

            }
        })

        let responseJson = await response.json()
        console.log(responseJson)
        
        if (responseJson.result === 'ok')
        {
            
            return new APIResponse(
                responseJson.data,
                responseJson.message,null, true
            )
        }
        else if(responseJson.result ==='failed'){
           
            return new APIResponse(
                null,
                responseJson.message, null, false
            )
        }
    }
    catch(error)
    {
        return new APIResponse(null, error.message, null, false)

    }
}


export const loginUser = async (email, password) =>
{
    try{
        let response = await fetch(API_LOGIN_USER, {
            method: 'POST',
            body: `email=${email}&password=${password}`,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',

            }
        })

        let responseJson = await response.json()
        
        
        if (responseJson.result === 'ok')
        {
            console.log(responseJson);
            
            return new APIResponse(responseJson.data, responseJson.message, responseJson.tokenKey, true)
        }
        else if(responseJson.result ==='failed'){
           
            return  new APIResponse(null, responseJson.message, false)
        }
    }
    catch(error)
    {
        return new APIResponse(null, error.message, false)

    }
}