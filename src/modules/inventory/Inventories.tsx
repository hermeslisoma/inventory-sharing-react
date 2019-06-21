import React, { Component } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom';
import './Inventories.scss'
import AddInventory from './AddInventory';
import ShareButton from './ActionsButtons/ShareButton';
import EditButton from './ActionsButtons/EditButton';
import DeleteInventory from './ActionsButtons/DeleteInventory';
import { connect } from 'react-redux';
import { IStoreState, IStateInventory } from '../../reducers/globalState.models.';
import { ILoginState } from '../../reducers/globalState.models.';
import {getInventoriesByUserAction} from '../../actions/inventory.actions'
import {Spinner} from 'reactstrap'

interface myProps extends RouteComponentProps{
    loginState:ILoginState,
    listInventoryState:IStateInventory[],
    getInventoriesByUserAction:any
    

}

class Inventories extends Component<myProps, any> {

            componentDidMount(){
                if(this.props.loginState.isAuthenticated){
                    let userId:number = this.props.loginState.currentUser.id;
                    console.log('component did mount::', this.props)
                    this.props.getInventoriesByUserAction(userId);
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
            if (this.props.listInventoryState[0]){
                console.log('ready to print',[...this.props.listInventoryState]) 
                list = [...this.props.listInventoryState].map((i:IStateInventory)=>
                    (
                        <div key ={i.id} className="card card-container">
                        <div className="card-body">
                            <h5 className="card-title"> {i.name}</h5>
                            <div className="actions my-2 d-flex justify-content-around align-items-center">
                                <ShareButton className="text-primary" inventory = {i} />
                                <EditButton  className="text-warning" inventory = {i}  />
                                <DeleteInventory className="text-danger" inventory = {i}/>

                            </div>
                            
                            <p className="card-text">{i.description}</p>
                            <Link to="/areas" className="btn btn-warning">see Inventory</Link>
                        </div>
                    </div>
                    )
                )
            }
        return (
            <div className='container Inventories-container mt-5'>
                <div className="header d-flex flex-row">
                    <p className="display-4">My inventories</p>
                    <AddInventory className="modalAddInventory" buttonLabel='Add Inventory' />
                </div>
                
                <div className="inventories-container p-3">
                        {(this.props.listInventoryState[0] && list ) || <Spinner color="success" />
                        }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state:IStoreState) =>{
    
    return {
        loginState: state.loginState,
        listInventoryState: state.listInventoryState
    }
}

const mapDispatchToProps = {
    getInventoriesByUserAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventories);