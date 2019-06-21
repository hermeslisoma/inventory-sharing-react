
import axios from "axios";
import { BaseService } from './baseService';
import { IStateInventory } from "../reducers/globalState.models.";

 export class InventoryService extends BaseService<IStateInventory>{

  constructor() {
    super("/api/inventories");
  }

getInventoriesByUserID =(inventoryId:number)=> {
   
    return axios.get(`${this.url}/users/${inventoryId}`, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp;
                 }).catch(error => {
                   return error.response
                 });
  }
  saveInventoryByUserId =(userId:number,inventory:IStateInventory)=> {
   
    return axios.post(`${this.url}/users/${userId}`,inventory, {headers: this.getHeaders()})
                 .then(resp => {
                   console.log("this is the respoinse for the inventory::",resp)
                   return resp;
                 }).catch(error => {
                   return error.response
                 });
  }




}
 