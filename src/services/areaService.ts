
import axios from "axios";
import { BaseService } from './baseService';
import { IStateArea } from "../reducers/globalState.models.";

 export class AreaService extends BaseService<IStateArea>{

  constructor() {
    super("/inventories/areas");
  }

getAreasByInventoryID = (InventoryId:number)=> {
    return axios.get(`${this.url}/${InventoryId}`, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }




}
 