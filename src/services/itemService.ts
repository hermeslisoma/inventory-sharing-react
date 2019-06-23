
import axios from "axios";
import { BaseService } from './baseService';
import { IStateItem } from "../reducers/globalState.models.";

 export class ItemService extends BaseService<IStateItem>{

  constructor() {
    super("/api/inventories/areas/items/");
  }


  updateItem = (T)=>{
    // console.log('inside the service update url::',`${this.url}/${id}`,T)
    return axios.patch(`${this.url}`,T, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }

  deleteItem = (T)=>{
    // console.log('inside the service update url::',`${this.url}/${id}`,T)
    return axios.delete(`${this.url}${T}`, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }



}