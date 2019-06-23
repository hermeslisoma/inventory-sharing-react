
import { LoginService } from '../services/loginService';
import * as types from './all.type.actions';

export const logout = () => async(dispatch) =>{
    
         
            localStorage.removeItem("loginUser");
            dispatch({
                type:types.LOG_OUT
            })



}
export const register = (user) => async(dispatch) =>{
    
    
    

    


}
export const login = (username:string, password:string, history:any) => async(dispatch) =>{
    
    try{
        let loginService = new LoginService()
        

        const response = await loginService.login(username, password)
        console.log(response.data)


        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.INVALID_CREDENTIALS
            })
        } else if( response.status === 200){
            // const user = await response.data
            dispatch({
                payload:{
                    user: response.data
                },
                type: types.SUCCESSFUL_LOGIN
            })
            history.push('/inventories')

            
        } else {
            dispatch({
                type: types.FAILED_TO_LOGIN
            })
        }        
    } catch(err){
        console.log(err);        
    }


}