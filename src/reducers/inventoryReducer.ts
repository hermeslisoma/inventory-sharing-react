import { IStateInventory } from "./globalState.models.";
import * as types from '../actions/all.type.actions';


let initialState:IStateInventory[] = []


export default function(state:IStateInventory[] = initialState, action:any) {
  let payload = action.payload;
  let newState:IStateInventory[]=[];
  console.log('reducer in inventory:',payload)
  switch(action.type) {
    case types.SET_INVENTORIES:
        newState = payload.inventoryList;//this step is just to verify the type of the payload before set up the state
        return [...newState ];

    case types.CREATE_INVENTORY:
            let newInventory = payload;
        return [...state, newInventory ];

    case types.UPDATE_INVENTORY:
            let inventory:IStateInventory = payload;
            newState = [...state].map((i:IStateInventory)=>i.id===inventory.id? inventory:i);
        return [...newState ];

    case types.DELETE_INVENTORY:
            let id:number = payload;
            newState = [...state].filter((i:IStateInventory)=>i.id!==id);
        return [...newState ];
        
    case types.CLEAR_INVENTORIES:
        return []; 
      
    default:
        return state;
  }
}