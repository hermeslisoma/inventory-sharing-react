import React, { Component } from 'react';
import './App.scss'
import './include/bootstrap'
import {BrowserRouter, Route,Switch} from 'react-router-dom'

//Components
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import World from './modules/world/World';
import Login from './modules/login/Login';
import Areas from './modules/areas/Areas';
import Header from './modules/header/Header';
import Inventories from './modules/inventory/Inventories'

class App extends Component<any,any> {
  componentDidMount(){
    console.log('app mounted')
    console.log('app props:: ',this.props)
  }
  render() {
    const store = configureStore();
    return (
      <Provider store={store} >
          <BrowserRouter>
           <Header/>
          <div className="container">
              
              <Switch>
                  <Route exact path="/" component = { Login }/>
                  <Route path ="/world" component = { World }/>
                  <Route path = "/inventories" component = {Inventories}/>
                  <Route path = "/areas" component = {Areas}/>
                  <Route path="/" component = { () => <h1>not found</h1> }/>
              </Switch> 
          </div>
             
          </BrowserRouter> 
        
        </Provider>
    
    );
  }
}
export default App