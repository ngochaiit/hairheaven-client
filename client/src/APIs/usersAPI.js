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
const API_BLOG_POST = `${SERVER_NAME}:${SERVER_PORT}/blogposts/newpost`
const API_SHOW_BLOGPOST = `${SERVER_NAME}:${SERVER_PORT}/blogposts/showallpost`
const API_DELETE_BLOGPOST = `${SERVER_NAME}:${SERVER_PORT}/blogposts/delete`
const API_UPDATE_BLOGPOST = `${SERVER_NAME}:${SERVER_PORT}/blogposts/update`
const API_FIND_BLOGPOST_BY_ID =`${SERVER_NAME}:${SERVER_PORT}/blogposts/detailBlogPost`



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
            console.log(responseJson.tokenKey);
            sessionStorage.setItem('tokenKey',responseJson.tokenKey);
        
            
            return new APIResponse(responseJson.data, responseJson.message, responseJson.tokenKey, true)
        }
        else if(responseJson.result ==='failed'){
           
            return  new APIResponse(null, responseJson.message,null, false)
        }
    }
    catch(error)
    {
        return new APIResponse(null, error.message,null, false)

    }
}


export const createNewBlogPost = async (title,intro, content,file, tokenKey) =>
{
    try{
        let form = new FormData();
        form.append("title",title);
        form.append("intro", intro);
        form.append("content",content);
        form.append("urlImage",file);
        let response = await fetch(API_BLOG_POST, {
            method: 'POST',
            body: form,
            headers: {
                
                'x-access-token': tokenKey
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


export const showAllPost = async () =>
{
 try{
    let response = await fetch(API_SHOW_BLOGPOST)
    let responseJson = await response.json()
    if(responseJson.result ==='ok')
    {
        return new APIResponse(
            responseJson.data, responseJson.message, null, true
        )
    }
    else if(responseJson.result === 'failed')
    {
        return new APIResponse(
            null, responseJson.message, null, false
        )

    }


 }
 catch(error)
 {
    return new APIResponse(null, error.message, null, false)

 }
}

export const DeletePost = async (id, tokenKey) =>
{
    try{
        let response = await fetch(API_DELETE_BLOGPOST,{
            method: 'DELETE',
            body: `id=${id}`,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'x-access-token': tokenKey

            }
        })

        let responseJson = await response.json();
        if(responseJson.result ==='ok')
    {
        return new APIResponse(
            null, responseJson.message, null, true
        )
    }
    else if(responseJson.result === 'failed')
    {
        return new APIResponse(
            null, responseJson.message, null, false
        )

    }


    }
    catch(error)
    {
        return new APIResponse(null, error.message, null, false)
    }
}




export const updatePost = async (idBlogPost,title, content,file, tokenKey) =>
{
    try{
        let form = new FormData();
        form.append("title",title);
        form.append("content",content);
        form.append("urlImage",file);
        form.append('id',idBlogPost)
        console.log(idBlogPost,'test')
        let response = await fetch(API_UPDATE_BLOGPOST, {
            method: 'PUT',
            body: form,
            headers: {
                
                'x-access-token': tokenKey
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




export const findBlogPosts = async (idBlogPost) =>
{
    try{
        let response = await fetch(`${API_FIND_BLOGPOST_BY_ID}?id=${idBlogPost}` , {
            method: 'GET',
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