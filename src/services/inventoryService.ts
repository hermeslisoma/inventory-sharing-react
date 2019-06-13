
import axios from "axios";
import { BaseService } from './baseService';

 export class InventoryService extends BaseService{

  constructor() {
    super("/inventories");
  }

//this methos goes to http://myhost/inventories/:userId with get method and return all inventoryes for that user
getInventoriesByUserID =(userId:number)=> {
    return axios.get(`${this.url}/${userId}`, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }
} 