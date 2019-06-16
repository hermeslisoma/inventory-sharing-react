

import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

 class DeleteInventory extends Component <any,any>{
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
        //this.props.deleteInventoryAction(this.props.id)
        this.toggle();


      }
    render() {
        return (
            <>
                <i onClick={this.toggle} className="fas fa-trash-alt"></i>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Delete Inventory</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.deleteInventory} className=' m-2'>

                    <div className= 'd-flex justify-content-center'>
                        <label className='my-3 lead' htmlFor="warning ">Are you sure you want to delete this inventory and all its contents?</label>
                    </div>
                    
                    <br/>
                    <div className='w-100 d-flex justify-content-around'>
                        <Button type='submit' color="danger" >Delete</Button>
                        <Button  onClick={this.toggle} color="primary" >Cancel</Button>
                    </div>
                    


                </form>
                
            </ModalBody>
          </Modal>
                
            </>
        )
    }
}
// export const mapDispatchProps = {
   
// }
// const mapStateToProps = (state:)=>{
//     return{
       
//     }

// }
export default connect()(DeleteInventory)

