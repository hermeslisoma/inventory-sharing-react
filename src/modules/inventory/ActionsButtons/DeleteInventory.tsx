

import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { IStoreState, IStateInventory, ILoginState } from '../../../reducers/globalState.models.';
import {deleteInventoryAction} from '../../../actions/inventory.actions'


interface myProps{
    inventory:IStateInventory,
    deleteInventoryAction:(inventoryid:number)=>{},
    className:string,
    loginState:ILoginState
}
 class DeleteInventory extends Component <myProps,any>{
    state = {
        modal:false
    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    deleteInventory=(e)=>{
        e.preventDefault();
        this.props.deleteInventoryAction(this.props.inventory.id);
        this.toggle();


      }
    render() {
        return (
            <>
                <i onClick={this.toggle} className={`fas fa-trash-alt ${this.props.className}`}></i>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Delete Inventory</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.deleteInventory} className=' m-2'>

                    <div className= 'd-flex justify-content-center'>
                        <label className='my-3 lead' htmlFor="warning ">Are you sure you want to delete this inventory and all its contents?</label>
                    </div>
                    
                    <br/>
                    <div className='w-100 d-flex justify-content-around'>
                        <Button type='submit' color="danger" >Delete</Button>
                        <Button  onClick={this.toggle} color="info" >Cancel</Button>
                    </div>
                    


                </form>
                
            </ModalBody>
          </Modal>
                
            </>
        )
    }
}
export const mapDispatchProps = {
    deleteInventoryAction
}
const mapStateToProps = (state:IStoreState)=>{
    return{
        loginState:state.loginState
       
    }

}
export default connect(mapStateToProps,mapDispatchProps)(DeleteInventory)

