
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




}
 