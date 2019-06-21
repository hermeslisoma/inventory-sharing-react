import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import inventoryReducer from './inventoryReducer';
import areaReducer from './areaReducer';
import { loginReducer } from './loginReducer';
import { currentInventoryReducer } from './currentInventoryReducer';

const rootReducer = combineReducers({
    messageState: messageReducer,
    listInventoryState:inventoryReducer,
    listAreaState:areaReducer,
    loginState:loginReducer,
    currentInventoryState:currentInventoryReducer
});

export default rootReducer;