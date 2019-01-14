/*
File nay chua cac thong tin lien quan den API , VD:server Name, port./..
*/
export const SERVER_NAME = 'http://127.0.0.1'
export const SERVER_PORT = '3000'
export class APIResponse 
{
    constructor( data, message, tokenKey, result)
    {
        this.data = data ? data : {}// du lieu lay ve
        this.message = message ? message : ''//Thong bao
        this.tokenKey = tokenKey ? tokenKey : ''
        this.result = result//True or false
    }
}