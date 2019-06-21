import { IStateInventory } from "./globalState.models.";
import * as types from '../actions/all.type.actions';


let initialState:IStateInventory = {
    id: undefined,
    name: undefined,
    description: undefined
}

export const currentInventoryReducer = (state:IStateInventory = initialState, action) =>{
    switch(action.type){
        case types.SET_CURRENT_INVENTORY:
            return{
                ...state,
                id: action.payload.currentUser.id,
                name: action.payload.currentUser.name,
                description: action.payload.currentUser.description
            }
        case types.CLEAR_CURRENT_INVENTORY:
            return{
                ...state
            }
    }
}