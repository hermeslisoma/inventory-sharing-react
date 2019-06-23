import { IStateInventory } from "./globalState.models.";
import * as types from '../actions/all.type.actions';


let initialState:IStateInventory = {
    id: undefined,
    name: undefined,
    description: undefined,
    levelId:undefined
}

export const currentInventoryReducer = (state:IStateInventory = initialState, action) =>{
    
    switch(action.type){
        case types.SET_CURRENT_INVENTORY:
            return{
                ...state,
                id: action.payload.currentInventory.id,
                name: action.payload.currentInventory.name,
                description: action.payload.currentInventory.description,
                levelId: action.payload.currentInventory.levelId
            }
        case types.CLEAR_CURRENT_INVENTORY:
            return{
                ...initialState
            }
    }
    return{
        ...state
    }
}