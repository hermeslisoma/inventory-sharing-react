import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import inventoryReducer from './inventoryReducer';
import areaReducer from './areaReducer';

const rootReducer = combineReducers({
    messageState: messageReducer,
    listInventoryState:inventoryReducer,
    listAreaState:areaReducer

});

export default rootReducer;