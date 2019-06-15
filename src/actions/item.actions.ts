import * as types from './all.type.actions';
import { ItemService } from '../services/itemService';
import { IStateItem } from '../reducers/globalState.models.';

//all item actions go to the areaReducer 
export const deleteItemAction = (id:number) => async dispatch => {
    try{
        let itemService = new ItemService();
        let response = await itemService.Delete(id);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    id
                },
                type:types.DELETE_ITEM
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const updateItemAction = (Item:IStateItem) => async dispatch => {
    try{
        let itemService = new ItemService();
        let response = await itemService.Update(Item.id,Item);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    Item
                },
                type:types.UPDATE_ITEM
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
//I need the areaID to create the item
export const createItemAction = (AreaId:number,Item:IStateItem) => async dispatch => {
    try{
        let itemService = new ItemService();
        let response = await itemService.Create(Item);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    AreaId,
                    Item
                },
                type:types.CREATE_ITEM
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};