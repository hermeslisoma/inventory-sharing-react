
import axios from "axios";
import { BaseService } from './baseService';
import { IStateItem } from "../reducers/globalState.models.";

 export class ItemService extends BaseService<IStateItem>{

  constructor() {
    super("/api/inventories/areas/items/");
  }






}