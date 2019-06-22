import { IMessageState } from "./globalState.models.";
import * as types from '../actions/all.type.actions';


let initialState:IMessageState = {
    message:' '
  }


export default function(state:IMessageState = initialState, action:any) {
  let response:IMessageState= action.response;
  switch(action.type) {
    case types.SET_MESSAGE:
      return { ...state , ...response };

    case types.CLEAR_MESSAGE:
      return { ...state,message:'' };
      
    default:
      return state;
  }
}