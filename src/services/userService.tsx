
import axios from "axios";
import { BaseService } from './baseService';
import { ILoginState } from "../reducers/globalState.models.";
import base64 from 'base-64'
import { LoginUser } from "./models/loginModel";

 export class UserService extends BaseService<ILoginState>{

  constructor() {
    super("/api/users");
  }



getAllUsers =()=> {
    return axios.get(`${this.url}`, {headers: this.getHeaders()})
                 .then(resp => {
                //   this.setCurrentLogin(resp.data)
                // console.log(resp.data)
                   return resp.data;
                 }).catch(error => {
                   return error.response
                 });
  }




}