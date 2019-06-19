
import axios from "axios";
import { BaseService } from './baseService';
import { IStateInventory, ILoginState } from "../reducers/globalState.models.";
import base64 from 'base-64'
import { User } from "./models/loginModel";

 export class RegisterService extends BaseService<ILoginState>{

  constructor() {
    super("/api/user/registration");
  }

  getRegisterHeaders = () =>  {
    // getLoginHeaders = (creds:String) =>  {
        const headers: any = {
      'content-type': 'application/json',
    //   'Authorization': `Basic ${creds}`
    };
    // headers.Authorization = 'Basic '+creds;
    // console.log(headers,"this is gonna be my headers");
    return headers;
  }
  

register =(user)=> {
    console.log(this.url)
    // const creds = base64.encode(`${username}:${password}`)
    // console.log(creds)
    return axios.post(`${this.url}`, user, {headers: this.getRegisterHeaders()})
                 .then(resp => {
                   return resp;
                 }).catch(error => {
                   return error.response
                 });
  }

}