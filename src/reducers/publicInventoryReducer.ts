import { IStateInventory } from "./globalState.models.";
import * as types from '../actions/all.type.actions';


let initialState:IStateInventory[] = []


export default function(state:IStateInventory[] = initialState, action:any) {
  let payload = action.payload;
  let newState:IStateInventory[]=[];
  switch(action.type) {
    case types.SET_PUBLIC_INVENTORIES:
        newState = payload.inventoryList;//this step is just to verify the type of the payload before set up the state
        return [...newState ];
    
    default:
        return state;
  }
}