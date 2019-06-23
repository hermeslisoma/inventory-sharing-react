import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import './Areas.scss'
import AddArea from './AddArea';
import  AddItem  from './AreaActionButtons/AddItem';
import { IStoreState, ILoginState, IStateArea, IStateInventory } from '../../reducers/globalState.models.';
import { connect } from 'react-redux';
import { getAreasByInventoryIdAction } from '../../actions/area.action'
import  UpdateArea  from './AreaActionButtons/UpdateArea';
import UpdateItem from './ItemActionButtons/UpdateItem';
import DeleteItem from './ItemActionButtons/DeleteItem';
import DeleteArea from './AreaActionButtons/DeleteArea';



interface IAreaProps extends RouteComponentProps{
    loginState:ILoginState,
    listAreaState:IStateArea[],
    getAreasByInventoryIdAction:any,
    inventoryState: IStateInventory,
    currentInventoryState:IStateInventory
    
}
export class Areas extends Component<IAreaProps, any> {


    componentDidMount = async ()=>{
        if(this.props.loginState.isAuthenticated){
            
            let invId = this.props.inventoryState.id
            this.props.getAreasByInventoryIdAction(invId)
            
        }else{
            console.log(`i'm not authenticated`)
            localStorage.removeItem('loginUser')
            this.props.history.push('/')
        }
    }
    componentDidUpdate(){
        // console.log('updated::',this.props)
        // this.areas()
    }
    render() {
        let lst
        if (this.props.listAreaState !== undefined){
            // console.log('ready to print',[...this.props.listAreaState]) 
            lst = [...this.props.listAreaState].map((a:IStateArea)=>
                (
                <div key ={a.id} className="card card-container">
                    <div className="card-header d-flext pt-3">
                        <h5 className="card-title mr-auto"> {a.name}</h5>
                        <p className="card-text">{a.description}</p>
                        
                        {this.props.currentInventoryState.levelId === 1? 
                        <div className="d-flex justify-content-around">
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-cog"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-Area" aria-labelledby="btnGroupDrop1">
                                    <div className="d-flex flex-column ">
                                        <UpdateArea area = {a}  className="updateArea"/>
                                        <DeleteArea area = {a} className = "deleteArea"/>
                                    </div>
                                    
                                </div>
                            </div>
                            <AddItem area = {a} className="addItem"/>
                        </div>
                            : <></>}
                        
                        
                    </div>
                    <div className="card-body">
                        {a.items[0] && a.items.map((item) => (
                            <div key = {item.id} className="item">
                                <div className="d-flex align-items-center ">
                                    - {item.name}
                                    {this.props.currentInventoryState.levelId === 1? 
                                    <div className="ml-auto d-flex align-items-center my-3">
                                        <UpdateItem item = {item} area = {a} className="updateItem"/>
                                        <DeleteItem item = {item} className="deleteItem" />        
                                    </div>
                                     : <></>}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                )
            )
        }
        return (
            <div className='container Inventories-container mt-5'>
                <div className="header d-flex flex-row">
                    <p className="display-4">{this.props.inventoryState.name}</p>
                    {this.props.currentInventoryState.levelId === 1? 
                    <AddArea className="modalAddArea" buttonLabel='Add Area' />
                    : <></>}
                </div>
                
                <div className="inventories-container p-3">
                        {(this.props.listAreaState[0] && lst ) || <span className="lead">No Areas in this inventory yet.</span>}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state:IStoreState) =>{
    
    return {
        loginState: state.loginState,
        inventoryState: state.currentInventoryState,
        listAreaState: state.listAreaState,
        currentInventoryState:state.currentInventoryState
    }
}

const mapDispatchToProps = {
    getAreasByInventoryIdAction: getAreasByInventoryIdAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Areas);