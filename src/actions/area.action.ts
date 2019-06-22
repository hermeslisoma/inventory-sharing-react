import * as types from './all.type.actions';
import { AreaService } from '../services/areaService';
import { IStateArea, ICurrentAreaState } from '../reducers/globalState.models.';


export const deleteAreaAction = (id:number) => async dispatch => {
    try{
        let areaService = new AreaService();
        let response = await areaService.Delete(id);
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
                type:types.DELETE_AREA
            })
            
        }
      
    }  catch(err){
        console.log(err);      
    }

};
export const updateAreaAction = (area) => async dispatch => {
    try{
        let areaService = new AreaService();
        let response = await areaService.updateArea(area);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            let updatedArea = response.data
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
export const createAreaAction = (area) => async dispatch => {
    try{
        let areaService = new AreaService();
        let response = await areaService.addArea(area);
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            let newArea = response.data
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
        console.log(`data: ${response.data}`)
        if(response.status === 401){//if user pass is wrong
            //send info to the reducer
            dispatch({
                //with a type of INVALID CREDENTIALS
                type: types.UNAUTHORIZED
            })
        } else if ( response.status === 200){
            const data:IStateArea[] = response.data
            console.log(`data2 electic boogaloo: ${data[0].items}`)
            dispatch({
                payload:[
                    ...data
                ],
                type:types.SET_AREAS
            })
            //history.push('/myinventories')
            
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


