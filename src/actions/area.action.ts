import * as types from './all.type.actions';
import { AreaService } from '../services/areaService';
import { IStateArea, ICurrentAreaState } from '../reducers/globalState.models.';
import { Area } from '../services/models/Models';


export const deleteAreaAction = (id:number) => async dispatch => {
    try{
        let areaService = new AreaService();
        let response = await areaService.Delete(id);
        if(response.status === 401){
            dispatch({
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            dispatch({
                payload:{
                    id
                },
                type:types.DELETE_AREA
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const updateAreaAction = (area:IStateArea) => async dispatch => {
    try{
        let areaUpdate:Area = {
            id:area.id,
            name:area.name,
            description:area.description
        }
        let areaService = new AreaService();
        let response = await areaService.updateArea(areaUpdate);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            //we update this when the backend fix the response that it gives me
            let updatedArea = response.data
            console.log('response from back update',response);
            dispatch({
                payload:{
                    updatedArea
                },
                type:types.UPDATE_AREA
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const createAreaAction = (area:Area,inventoryId:number) => async dispatch => {
    
    try{
        console.log('inside create area::',area)
        let areaService = new AreaService();
        let areaToSave = {
            name:area.name,
            description:area.description,
            inventory:{
                id:inventoryId

            }
		}
        
        let response = await areaService.addArea(areaToSave);
        if(response.status === 401){
            dispatch({
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            let newArea:IStateArea = {
                id : response.data.id,
                name : response.data.name,
                description : response.data.description,
                items : []
            };
            dispatch({
                payload:{
                    newArea
                },
                type:types.CREATE_AREA
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const getAreasByInventoryIdAction = (inventoryId:number) => async dispatch => {
    try{
        let areaService = new AreaService();
        let response = await areaService.getAreasByInventoryID(inventoryId);
        
        if(response.status === 401){
            dispatch({
                type: types.UNAUTHORIZED
            })
        } else {
            const data:IStateArea[] = response.data
            if((response.data.length === 0)){
                dispatch({
                    type:types.CLEAR_AREAS
                })
            }else{

                dispatch({
                    payload:data,
                    type:types.SET_AREAS
                })

            }
            
            
            
        } 
      
    }  catch(err){
        console.log(err);      
    }

};

export const setCurrentAreaAction = (area) => dispatch => {
    // try{
        // let inventoryService = new InventoryService()
        // let response = await inventoryService.getInventoryById(inv)
        console.log(area.name)
            const currentArea:ICurrentAreaState = area
            dispatch({
                payload:{
                    currentArea
                },
                type:types.SET_CURRENT_AREA
            })
        }


