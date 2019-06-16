
import axios from "axios";
import { BaseService } from './baseService';
import { IStateInventory } from "../reducers/globalState.models.";

 export class InventoryService extends BaseService<IStateInventory>{

  constructor() {
    super("/inventories");
  }

//this methos goes to http://myhost/inventories/:inventoryId with get method and return all inventoris es for that user
getInventoriesByUserID =(inventoryId:number)=> {
    return axios.get(`${this.url}/${inventoryId}`, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }




}
 