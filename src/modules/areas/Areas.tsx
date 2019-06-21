import React, { Component } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom';
import './Areas.scss'
import AddArea from './AddArea';
import  AddItem  from './AddItem';
import EditButton from './ActionButtons/EditButton';
import DeleteButton from './ActionButtons/DeleteButton';
import { IStoreState, ILoginState, IStateArea, IStateInventory } from '../../reducers/globalState.models.';
import { connect } from 'react-redux';
import {Spinner} from 'reactstrap'



interface IAreaProps extends RouteComponentProps{
    loginState:ILoginState,
    listAreaState:IStateArea[],
    getAreasByInventoryIDAction:any
    inventoryState: IStateInventory
    
    
}
export class Areas extends Component<IAreaProps, any> {
    componentDidMount(){
        if(this.props.loginState.isAuthenticated){
            let invId:number = this.props.inventoryState.id;
            console.log('component did mount::', this.props)
            this.props.getAreasByInventoryIDAction(invId);
        }else{
            console.log(`i'm not authenticated`)
            localStorage.removeItem('loginUser')
            this.props.history.push('/')
        }
    }
    render() {
        let lst
        if (this.props.listAreaState[0]){
            console.log('ready to print',[...this.props.listAreaState]) 
            lst = [...this.props.listAreaState].map((i:IStateArea)=>
                (
                    <div key ={i.id} className="card card-container">
                    <div className="card-body">
                        <h5 className="card-title"> {i.name}</h5>
                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                        </div>
                        
                        <p className="card-text">{i.description}</p>
                        <Link to="/areas" className="btn btn-warning">see Inventory</Link>
                    </div>
                </div>
                )
            )
        }
        return (
            // <div className='container Areas-container mt-5'>
            //     <div className="header d-flex flex-row">
            //         <p className="display-4">Books Inventory</p>
            //         <AddArea className="modalAddArea" buttonLabel='Add Area' />
            //     </div>
                
            //     <div className="areas-container p-3">
            //         <div className="card card-container ">
            //             <div className="card-header d-flex pt-3">
            //                 <h5 className="card-title mr-auto ">Bed roomBookShelf Area</h5> 
            //                 <AddItem className="modalAddInventory" />
            //             </div>
            //             <div className="card-body">
            //                     <div className="item">
            //                         <div className="d-flex align-items-center ">
            //                             Java core 
            //                             <div className="ml-auto d-flex align-items-center my-3">
            //                                 <EditButton/><DeleteButton />
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="item">
            //                         <div className="d-flex align-items-center ">
            //                             Spring for dummies
            //                             <div className="ml-auto d-flex align-items-center my-3">
            //                                 <EditButton/><DeleteButton />
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="item">
            //                         <div className="d-flex align-items-center ">
            //                             React forever
            //                             <div className="ml-auto d-flex align-items-center my-3">
            //                                 <EditButton/><DeleteButton />
            //                             </div>
            //                         </div>
            //                     </div>

                            
            //             </div>
            //         </div>
            //         <div className="card card-container ">
            //             <div className="card-header d-flex pt-3">
            //                 <h5 className="card-title mr-auto ">Living room </h5> 
            //                 <AddItem className="modalAddInventory" />
            //             </div>
            //             <div className="card-body">
            //                     <div className="item">
            //                         <div className="d-flex align-items-center ">
            //                             Bootstrap
            //                             <div className="ml-auto d-flex align-items-center my-3">
            //                                 <EditButton/><DeleteButton />
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="item">
            //                         <div className="d-flex align-items-center ">
            //                             Spring framework
            //                             <div className="ml-auto d-flex align-items-center my-3">
            //                                 <EditButton/><DeleteButton />
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="item">
            //                         <div className="d-flex align-items-center ">
            //                             Vue.js
            //                             <div className="ml-auto d-flex align-items-center my-3">
            //                                 <EditButton/><DeleteButton />
            //                             </div>
            //                         </div>
            //                     </div>

                            
            //             </div>
            //         </div>
            //         <div className="card card-container ">
            //             <div className="card-header d-flex pt-3">
            //                 <h5 className="card-title mr-auto ">Office</h5> 
            //                 <AddItem className="modalAddInventory" />
            //             </div>
            //             <div className="card-body">
            //                     <div className="item">
            //                         <div className="d-flex align-items-center ">
            //                             Html and css
            //                             <div className="ml-auto d-flex align-items-center my-3">
            //                                 <EditButton/><DeleteButton />
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="item">
            //                         <div className="d-flex align-items-center ">
            //                             Angular 6
            //                             <div className="ml-auto d-flex align-items-center my-3">
            //                                 <EditButton/><DeleteButton />
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="item">
            //                         <div className="d-flex align-items-center ">
            //                             Javascript
            //                             <div className="ml-auto d-flex align-items-center my-3">
            //                                 <EditButton/><DeleteButton />
            //                             </div>
            //                         </div>
            //                     </div>

                            
            //             </div>
            //         </div>
                    
                    
            //     </div>
            // </div>
            <div className='container Inventories-container mt-5'>
                <div className="header d-flex flex-row">
                    <p className="display-4">My inventories</p>
                    {/* <AddInventory className="modalAddInventory" buttonLabel='Add Inventory' /> */}
                </div>
                
                <div className="inventories-container p-3">
                        {(this.props.listAreaState[0] && lst ) || <Spinner color="success" />
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

export default connect(mapStateToProps)(Areas);