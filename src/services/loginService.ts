
import axios from "axios";
import { BaseService } from './baseService';
import { IStateInventory } from "../reducers/globalState.models.";
import base64 from 'base-64'

 export class LoginService extends BaseService<IStateInventory>{

  constructor() {
    super("/login");
  }

login =(username:string, password:string)=> {
    const creds = base64.encode(`${username}:${password}`)
    console.log(creds)
    return axios.post(`${this.url}`,creds, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }




}