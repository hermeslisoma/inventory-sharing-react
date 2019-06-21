import { IStateArea, IStateItem } from "./globalState.models.";
import * as types from '../actions/all.type.actions';


let initialState:IStateArea[] = []


export default function(state:IStateArea[] = initialState, action:any) {
  let payload = action.payload;
  let newState:IStateArea[]=[];
  let id:number,AreaId:number,itemId:number = undefined;
  let item:IStateItem = undefined;
  console.log('reducer in Area:',payload)
//   console.log(payload)
  switch(action.type) {
    case types.SET_AREAS:
        newState = payload;//this step is just to verify the type of the payload before set up the state
        console.log('new state::::',newState)
        // console.log(`newstate: ${newState[0]}`)
        let stat = [...newState]
        return [...newState];

    case types.CREATE_AREA:
            let newArea:IStateArea = payload;
        return [...state];

    case types.UPDATE_AREA:
            let Area:IStateArea = payload;
            newState = [...state].map((a:IStateArea)=>a.id===Area.id? Area:a);
        return [...newState ];

    case types.DELETE_AREA:
            id = payload;
            newState = [...state].filter((a:IStateArea)=>a.id!==id);
        return [...newState ];
        
    case types.CLEAR_AREAS:
        return []; 

    case types.DELETE_ITEM:
        itemId = payload;

        newState = [...state].map((a:IStateArea)=>{
            a.items= [...a.items].filter((item:IStateItem)=>item.id!==itemId);
            return a;
        });

        return [...newState];
    case types.CREATE_ITEM:
        item = payload.Item;
        AreaId = payload.AreaId;

        newState = [...state].map((a:IStateArea)=>{
            if(a.id===AreaId){
                a.items = [...a.items,item];
            }
            return a;
        });

        return [...newState];
    case types.UPDATE_ITEM:
            item = payload.Item;
    
            newState = [...state].map((a:IStateArea)=>{
                a.items= [...a.items].map((i:IStateItem)=>{
                    if (i.id===item.id){return  item }
                    return i
                });
                return a;
            });
    
            return [...newState];

    default:
        return state;
  }
}