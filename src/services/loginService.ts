
import axios from "axios";
import { BaseService } from './baseService';
import { IStateInventory } from "../reducers/globalState.models.";
import base64 from 'base-64'

 export class LoginService extends BaseService<IStateInventory>{

  constructor() {
    super("/api/user/login");
  }

  getLoginHeaders = (creds) =>  {
    // getLoginHeaders = (creds:String) =>  {
        const headers: any = {
      'content-type': 'application/json',
      'Authorization': `Basic ${creds}`
    };
    // headers.Authorization = 'Basic '+creds;
    console.log(headers,"this is gonna be my headers");
 
    return headers;
  }

login =(username:string, password:string)=> {
    const creds = base64.encode(`${username}:${password}`)
    console.log(creds)
    return axios.get(`${this.url}`, {headers: this.getLoginHeaders(creds)})
                 .then(resp => {
                   return resp;
                 }).catch(error => {
                   return error.response
                 });
  }




}