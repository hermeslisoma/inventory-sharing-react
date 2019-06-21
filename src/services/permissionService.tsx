

import axios from "axios";
import { BaseService } from './baseService';
import { IStateInventory } from "../reducers/globalState.models.";

 export class PermissionService extends BaseService<any>{

  constructor() {
    super("/api/permissions");
  }


sharePermissionToUser =(inventory:IStateInventory, username:string)=> {
    console.log('this is gonna be the permission service url to share permisssions to user::',this.url)
    return axios.post(`${this.url}/users/username/${username}`, inventory, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp;
                 }).catch(error => {
                   return error.response
                 });
  }

}