import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import '../inventory/Inventories.scss'
import { connect } from 'react-redux';
import { IStoreState, IStateInventory } from '../../reducers/globalState.models.';
import { ILoginState } from '../../reducers/globalState.models.';
import {getPublicInventoriesByUserAction, setCurrentInventoryAction} from '../../actions/inventory.actions';
import GetInventory from './ActionButtons/GetInventory';

interface myProps extends RouteComponentProps{
    loginState:ILoginState,
    listPublicInventoryState:IStateInventory[],
    getPublicInventoriesByUserAction:any
    setCurrentInventoryAction:any
    

}

class World extends Component<myProps, any> {

    areaLink = (id) =>{
        this.props.setCurrentInventoryAction(id)
        this.props.history.push('/areas')
    }

            componentDidMount(){
                if(this.props.loginState.isAuthenticated){
                    
                        this.props.getPublicInventoriesByUserAction();
                    
                    
                }else{
                    console.log(`i'm not authenticated`)
                    localStorage.removeItem('loginUser')
                    this.props.history.push('/')
                }
            }
            componentDidUpdate(){
                console.log('esto es updated::',this.props)
            }
    render() {

        let list:any;
            if (this.props.listPublicInventoryState[0]){
                console.log('ready to print',[...this.props.listPublicInventoryState]) 
                list = [...this.props.listPublicInventoryState].map((i:IStateInventory)=>
                    (
                        <div key ={i.id} className="card card-container">
                        <div className="card-body">
                            <h5 className="card-title"> {i.name}</h5>
                            <div className="actions my-2 d-flex justify-content-around align-items-center">
                                <GetInventory figure="far fa-arrow-alt-circle-down" className="text-info" inventory = {i}  currentUser = {this.props.loginState.currentUser}/>
                                

                            </div>
                            <p className="card-text">{i.description}</p>
                            <button className="btn btn-warning" onClick={
                                ()=>this.areaLink(i)}>see Inventory</button>
                        </div>
                    </div>
                    )
                )
            }
        return (
            <div className='container Inventories-container mt-5'>
                <div className="header d-flex flex-row">
                    <p className="display-4">World inventories</p>
                    
                </div>
                
                <div className="inventories-container p-3">
                        {(this.props.listPublicInventoryState[0] && list ) || <span className="lead">No inventories found, add one</span>
                        }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state:IStoreState) =>{
    
    return {
        loginState: state.loginState,
        listPublicInventoryState: state.listPublicInventoriesState
    }
}

const mapDispatchToProps = {
    getPublicInventoriesByUserAction,
    setCurrentInventoryAction
}

export default connect(mapStateToProps, mapDispatchToProps)(World);