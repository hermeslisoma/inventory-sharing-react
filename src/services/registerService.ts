
import axios from "axios";
import { BaseService } from './baseService';
import { ILoginState } from "../reducers/globalState.models.";

 export class RegisterService extends BaseService<ILoginState>{

  constructor() {
    super("/register");
  }

  getRegisterHeaders = () =>  {
        const headers: any = {
      'content-type': 'application/json',
    };
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