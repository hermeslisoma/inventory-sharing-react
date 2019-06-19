// import { ersClient } from "../axios/ers-client";
import { isError } from "util";
// import Axios from "axios";
import axios from 'axios';
import { LoginService } from '../services/loginService';



export const loginTypes = {
    INVALID_CREDENTIALS : 'LOGIN_INVALID_CREDENTIALS',
    FAILED_TO_LOGIN: 'LOGIN_FAILED_TO_LOGIN',
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN'

}

//this action is an example of a thunk
//a thunk is a two part function, the first part takes in your params
//the second part takes the param dispatch which we can use to send data to the reducer
export const login = (username:string, password:string, history:any) => async(dispatch) =>{
    // const credentials = {
    //     username,
    //     password
    // }

    try{
        let loginService = new LoginService()
        

        const response = await loginService.login(username, password)
        console.log(response.data)


        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: loginTypes.INVALID_CREDENTIALS
            })
        } else if( response.status === 200){
            // const user = await response.data
            localStorage.setItem("loginUser",response.data)
            dispatch({
                payload:{
                    user: response.data
                },
                type:loginTypes.SUCCESSFUL_LOGIN
            })
            // history.push('/inventories')

            
        } else {
            dispatch({
                type: loginTypes.FAILED_TO_LOGIN
            })
        }        
    } catch(err){
        console.log(err);        
    }


}