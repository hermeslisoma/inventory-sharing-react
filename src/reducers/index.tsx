import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import inventoryReducer from './inventoryReducer';
import areaReducer from './areaReducer';
import { loginReducer } from './loginReducer';
import { currentInventoryReducer } from './currentInventoryReducer';
import { currentAreaReducer } from './currentAreaReducer';
import publicInventoryReducer from './publicInventoryReducer';

const rootReducer = combineReducers({
    messageState: messageReducer,
    listInventoryState:inventoryReducer,
    listAreaState:areaReducer,
    loginState:loginReducer,
    currentInventoryState:currentInventoryReducer,
    currentAreaState:currentAreaReducer,
    listPublicInventoriesState:publicInventoryReducer

});

export default rootReducer;