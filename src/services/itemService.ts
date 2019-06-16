
import axios from "axios";
import { BaseService } from './baseService';
import { IStateItem } from "../reducers/globalState.models.";

 export class ItemService extends BaseService<IStateItem>{

  constructor() {
    super("/inventories/areas/items");
  }

getAreasByInventoryID =(InventoryId:number)=> {
    return axios.get(`${this.url}/${InventoryId}`, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }




}