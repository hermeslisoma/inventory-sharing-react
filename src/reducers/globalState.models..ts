import { User } from "../services/models/loginModel";

export interface IStoreState{
  listInventoryState:IStateInventory[],
  listAreaState:IStateArea[],
  messageState:IMessageState,
  loginState: ILoginState,
  currentInventoryState: IStateInventory
}

export interface IStateInventory{
  id:number;
  name:string;
  description:string;
}
export interface IStateArea{
  id:number;
  name:string;
  description:string;
  items:IStateItem[];
  // items:[]

}
export interface IStateItem{
  id:number;
  name:string;
  description:string;

}

export interface IMessageState{
  message:Object;
}

export interface ILoginState{
  isAuthenticated:boolean,
  currentUser:User
  errorMessage:string
}