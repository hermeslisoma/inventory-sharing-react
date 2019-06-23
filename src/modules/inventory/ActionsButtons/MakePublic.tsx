

import React, { Component } from 'react'
import { Button, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { IStoreState, IStateInventory } from '../../../reducers/globalState.models.';
import {deleteInventoryAction} from '../../../actions/inventory.actions'
import { PermissionService } from '../../../services/permissionService';


interface myProps{
    inventory:IStateInventory,
    className:string,
    currentUser:any,
    figure:string,
    toggleFather:()=>any;
  }
 class MakePublic extends Component <myProps,any>{
    state = {
        modal:false
    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    shareWorld=async (e)=>{
        e.preventDefault();
        let inventory = this.props.inventory;
        let  permissionService = new PermissionService();
        let response = await permissionService.sharePermissionToUser(inventory,"public",2);
        //TODO:: use the response to let the user success or failure or user not found in database
        //        
        console.log('this is the response::',response);
        this.toggle();
        this.props.toggleFather();

      }
    render() {
        return (
            <>
                <i onClick={this.toggle} className={`fas fa-globe-americas fa-3x ${this.props.className}`}></i>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
            
            <ModalBody>
                <form  onSubmit={this.shareWorld} className=' m-2'>

                    <div className= 'd-flex justify-content-center'>
                        <label className='my-3 lead text-center' htmlFor="warning ">Are you sure you want to share it with the world?</label>
                    </div>
                    
                    <br/>
                    <div className='w-100 d-flex justify-content-around'>
                        <Button type='submit' color="danger" >Yes share it</Button>
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
       
    }

}
export default connect(mapStateToProps,mapDispatchProps)(MakePublic)