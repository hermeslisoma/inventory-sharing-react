
import axios from "axios";
import { BaseService } from './baseService';
import { IStateArea } from "../reducers/globalState.models.";

 export class AreaService extends BaseService<IStateArea>{

  constructor() {
    super("/api/inventories/areas");
  }

getAreasByInventoryID = (InventoryId:number)=> {
    return axios.get(`${this.url}/${InventoryId}`, {headers: this.getHeaders()})
                 .then(resp => {
                  //  console.log(resp)
                   return resp;
                 }).catch(error => {
                   return error.response
                 });
  }

addArea = (area) => {
  console.log(area)
    return axios.post(`${this.url}`, area, {headers: this.getHeaders()})
                .then(resp => {
                  return resp
                }).catch(error => {
                  return error.response
                })
}
updateArea = (area)=>{
  // console.log('inside the service update url::',`${this.url}/${id}`,T)
  return axios.patch(`${this.url}`, area, {headers: this.getHeaders()})
              .then(resp => {
                return resp;
              }).catch(error => {
                return error.response
              });
}

}
 