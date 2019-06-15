export interface IStoreState{
  listInventoryState:IStateInventory[],
  listAreaState:IStateArea[],
  messageState:IMessageState,
}


export interface IStateInventory{
  id:number;
  title:string;
  description:string;
}
export interface IStateArea{
  id:number;
  title:string;
  description:string;
  itemsList:IStateItem[];

}
export interface IStateItem{
  id:number;
  title:string;
  description:string;

}

export interface IMessageState{
  message:Object;
}