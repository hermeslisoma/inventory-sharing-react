import { ILoginState } from "./globalState.models.";
import * as types from '../actions/all.type.actions';


const initialState: ILoginState = {
    isAuthenticated:false,
    currentUser: undefined,
    errorMessage: undefined
}

export const loginReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.INVALID_CREDENTIALS:
            return{
                ...state,
                errorMessage:'Invalid Credentials'
            }
            //break;
        case types.FAILED_TO_LOGIN:
            return{
                ...state,
                errorMessage:'failed to login'
            }
        case types.SUCCESSFUL_LOGIN:
            return{
                ...state,
                isAuthenticated:true,
                currentUser:{...action.payload.user},
                errorMessage:undefined
            }
        case types.LOG_OUT:
            return{
                isAuthenticated:false,
                currentUser:undefined,
                errorMessage:undefined
            }
        default:
            break;
    }

    return state
}