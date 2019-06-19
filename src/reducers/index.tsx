import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import inventoryReducer from './inventoryReducer';
import areaReducer from './areaReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
    messageState: messageReducer,
    listInventoryState:inventoryReducer,
    listAreaState:areaReducer,
    loginState:loginReducer

});

export default rootReducer;