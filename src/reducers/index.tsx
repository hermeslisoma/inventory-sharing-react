import { combineReducers } from 'redux';
import messageReducer from './messageReducer';



//Here we pair our state with the reducer 
//---------------------------------------------------------------------
//@@@@@@@@@@@@@@@@ This is an example from the last project@@@@@@@@@@
// import loginReducer from './loginReducer'
// import reimbursementsReducer from './reimbursementsReducer';
// import usersReducer from './usersListReducer'
// import messageReducer from './messageReducer'
// import reimbursementPendingReducer from './reimbursementPendingReducer';
// import userReimbursementReducer from './userReimbursementReducer';
// import reimbursementByPageReducer from './reimbursementByPageReducer';
// const rootReducer = combineReducers({
//   loginState :loginReducer,
//   reimbursementsListState :reimbursementsReducer,
//   reimbursementsPendingListState : reimbursementPendingReducer,
//   usersListState : usersReducer,
//   messageState: messageReducer,
//   userReimbursementState:userReimbursementReducer,
//   reimbursmentByPageState:reimbursementByPageReducer
// });
// export default rootReducer;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const rootReducer = combineReducers({
    messageState: messageReducer
});

export default rootReducer;