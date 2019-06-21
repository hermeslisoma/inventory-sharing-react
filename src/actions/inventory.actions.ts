import * as types from './all.type.actions';
import { InventoryService } from '../services/inventoryService';
import { IStateInventory } from '../reducers/globalState.models.';


export const deleteInventoryAction = (id:number) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.Delete(id);
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
                type:types.DELETE_INVENTORY
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const updateInventoryAction = (id:number,inventory:IStateInventory) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.UpdateWithItem(inventory);
        if(response.status === 401){
            //if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    id,
                    inventory:response.data
                },
                type:types.UPDATE_INVENTORY
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const saveInventoryByUserIdAction = (inventory:IStateInventory ,userId:number) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        //TODO:: End point to create
        let response = await inventoryService.saveInventoryByUserId(userId,inventory);

        if(response.status === 401){
            dispatch({
                type: types.UNAUTHORIZED 
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    resp :response.data
                },
                type:types.CREATE_INVENTORY
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const getInventoriesByUserAction = (userId:number) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.getInventoriesByUserID(userId);
        console.log("this is the list to update::",response)
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
           
            const inventoryList:IStateInventory[] = response.data
            dispatch({
                payload:{
                    inventoryList
                },
                type:types.SET_INVENTORIES
            })
            //history.push('/myinventories')
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};