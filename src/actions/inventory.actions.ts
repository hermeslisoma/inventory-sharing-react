import * as types from './all.type.actions';
import { InventoryService } from '../services/inventoryService';




export const createInventoryAction = (userId:number) => async dispatch => {
      try{







      }  catch{

      }

};
export const getInventoriesByUserAction = (userId:number) => async dispatch => {
    try{
        let inventoryService = new InventoryService();
        let response = await inventoryService.getInventoriesByUserID(userId);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            const inventories = response.data
            dispatch({
                payload:{
                    user: inventories
                },
                type:types.SET_INVENTORIES
            })
            //history.push('/myinventories')
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};