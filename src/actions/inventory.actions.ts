import * as types from './all.type.actions';
import { InventoryService } from '../services/inventoryService';
import { IStateInventory } from '../reducers/globalState.models.';
import { InventoryToSend } from '../services/models/Models';


export const deleteInventoryAction = (inventoryId:number) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.Delete(inventoryId);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    inventoryId
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
        let inventoryToSend:InventoryToSend = {
            id:inventory.id,
            name:inventory.name,
            description:inventory.description
          }
        let response = await inventoryService.UpdateWithItem(inventoryToSend);
        if(response.status === 401){
            dispatch({
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    id,
                    inventory
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
        console.log('this is the inventory::',inventory);
        console.log('this is the inventory::',response.data);
        
        if(response.status === 401){
            dispatch({
                type: types.UNAUTHORIZED 
            })
        } else if ( response.status === 200){
            let inventoryToSave = {
                id:response.data.id,
                ...inventory
    
            }
            console.log('this is the inventory to save::',inventoryToSave)
            dispatch({
                payload:{
                    resp :inventoryToSave
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
export const getPublicInventoriesByUserAction = () => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.getInventoriesByUserID(10);
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
                type:types.SET_PUBLIC_INVENTORIES
            })
            //history.push('/myinventories')
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};

export const setCurrentInventoryAction = (inv) => dispatch => {
    // try{
        // let inventoryService = new InventoryService()
        // let response = await inventoryService.getInventoryById(inv)
        console.log(inv.name)
            const currentInventory:IStateInventory = inv
            dispatch({
                payload:{
                    currentInventory
                },
                type:types.SET_CURRENT_INVENTORY
            })
        }
