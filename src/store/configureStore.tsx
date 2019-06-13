import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from "redux-thunk"
import rootReducer from '../reducers';
import logger from 'redux-logger'

export let store;
//THIS RUNS ONLY ONCE WHE THE COMPONENTS ARE MOUNTED ???
const configureStore = () => {
  //declare a saga middleware for handle the async call to the API

  store = 
    createStore(rootReducer,
      compose(
        applyMiddleware(reduxThunk,logger),
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      );
  //I add a step over here to see how the state of the store is return
  let newStateStore = {
    ...store
  }
  return newStateStore;
    //root reducer contains all the reducers,
    // aplly middleware declare that the requests has to go trought this middleware
    // and runs the middleware saga
  
};

export default configureStore;