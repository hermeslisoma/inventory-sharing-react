import { User } from "../services/models/loginModel";

export interface IStoreState{
  listInventoryState:IStateInventory[],
  listAreaState:IStateArea[],
  messageState:IMessageState,
  loginState: ILoginState
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
  itemsList:IStateItem[];

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