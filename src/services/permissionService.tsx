

import axios from "axios";
import { BaseService } from './baseService';
import { IStateInventory } from "../reducers/globalState.models.";
import { InventoryToSend } from "./models/Models";

 export class PermissionService extends BaseService<any>{

  constructor() {
    super("/api/permissions");
  }

  sharePermissionToUser=(inventory:IStateInventory, username:string,levelId:number)=> {
    let inventoryToSend:InventoryToSend = {
      id:inventory.id,
      name:inventory.name,
      description:inventory.description
    }
    console.log('this is gonna be the permission service url to share permisssions to user::',this.url)
    return axios.post(`${this.url}/users/username/${username}/level/${levelId}`, inventoryToSend, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp;
                 }).catch(error => {
                   return error.response
                 });
  }

}