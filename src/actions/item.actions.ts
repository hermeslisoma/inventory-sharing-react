import * as types from './all.type.actions';
import { ItemService } from '../services/itemService';
import { IStateItem } from '../reducers/globalState.models.';

//all item actions go to the areaReducer 
export const deleteItemAction = (id:number) => async dispatch => {
    try{
        let itemService = new ItemService();
        let response = await itemService.deleteItem(id);
        if(response.status === 401){
            dispatch({
                
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
        let response = await itemService.updateItem(Item);
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
export const addItemAction = (newItem) => async dispatch => {
    try{
        let itemService = new ItemService();
        let response = await itemService.Create(newItem);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            console.log('this is the response::',response);
            let item = response.data;
            dispatch({
                payload:{
                    areaId:item.area.id,
                    item
                },
                type:types.CREATE_ITEM
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};