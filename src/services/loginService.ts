
import axios from "axios";
import { BaseService } from './baseService';
import { IStateInventory } from "../reducers/globalState.models.";

 export class LoginService extends BaseService<IStateInventory>{

  constructor() {
    super("/login");
  }

login =(username:string, password:string)=> {
    const creds = {
        username:username,
        password:password
    }
    return axios.post(`${this.url}`,creds, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }




}