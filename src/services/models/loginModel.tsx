export interface LoginUser {
    token:string,
    user:User 
    };
export interface User {
    id: number,
    userName: string,
    firstName: string,
    lastName: string,
    email: string
} ; 
