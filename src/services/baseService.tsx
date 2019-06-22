import axios from 'axios';
import { url } from './apiUrl';
import {LoginUser} from './models/loginModel';

export class BaseService<T> {
  url: string = url;
  constructor(route: string) {
    this.url += route;
  }

  getHeaders()  {
    let login: LoginUser = this.getCurrentLogin();
    const headers: any = {'Content-Type': 'application/json'};
    if (login) headers.Authorization = 'Bearer '+ login.token;
    console.log('this are the headers from get headers:',headers)
    return headers;
  }

  getCurrentLogin(): LoginUser {
    let login: LoginUser;
    console.log('this is the local storage:',JSON.parse(localStorage.getItem("loginUser")))
    const data = localStorage.getItem("loginUser");
    if(data)  login = JSON.parse(data)
    //@ts-ignore
    return login;
  }
  
  Get= (id:number)=>{
     return axios.get(`${this.url}/${id}`, {headers: this.getHeaders()})
                  .then(resp => {
                    return resp.data;
                  }).catch(error => {
                    return error.response.data
                  });
   }
  GetAll=()=>{
    return axios.get(`${this.url}`, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }

  Add = (item) =>{
    return axios.post(`${this.url}`,item, {headers: this.getHeaders()})
                .then(resp => {
                    return resp ;
                }).catch(error => {
                    return error.response
                });
  }
  Update = (id:number,T)=>{
    console.log('inside the service update url::',`${this.url}/${id}`,T)
    return axios.patch(`${this.url}/${id}`,T, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }
  UpdateWithItem = (T)=>{
    console.log('inside the service update item url::',`${this.url}`,T)
    return axios.patch(`${this.url}`,T, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }
  
  Create = (T)=>{
    console.log('inside the service create url::',`${this.url}`,T)
    return axios.post(`${this.url}`,T, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }
  Delete = (id:number)=>{
    console.log('inside delete:::',`${this.url}/${id}`);
    
    return axios.delete(`${this.url}/${id}`, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }
}