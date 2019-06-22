import { ICurrentAreaState } from "./globalState.models.";
import * as types from '../actions/all.type.actions';


let initialState:ICurrentAreaState = {
    id: undefined,
    name: undefined,
    description: undefined,
    // items: undefined
}

export const currentAreaReducer = (state:ICurrentAreaState = initialState, action) =>{
    
    switch(action.type){
        case types.SET_CURRENT_AREA:
            return{
                ...state,
                id: action.payload.currentArea.id,
                name: action.payload.currentArea.name,
                description: action.payload.currentArea.description
            }
        case types.CLEAR_CURRENT_AREA:
            return{
                ...initialState
            }
    }
    return{
        ...state
    }
}