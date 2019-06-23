

import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { IStateArea, IStoreState } from '../../../reducers/globalState.models.';
import { deleteAreaAction } from '../../../actions/area.action';

interface myProps {
    area:IStateArea,
    deleteAreaAction:any,
    className:string
}
 class DeleteArea extends Component <myProps,any>{
    state = {
        modal:false
    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    deleteArea=(e)=>{
        e.preventDefault();
        this.props.deleteAreaAction(this.props.area.id)
        this.toggle();


      }
    render() {
        return (
        <>
            <button className='btn btn-danger' onClick={this.toggle}>
                <span>Delete Area</span>
            </button>
            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Delete Item</ModalHeader>
                <ModalBody>
                    <form  onSubmit={this.deleteArea} className=' m-2'>

                        <div className= 'd-flex justify-content-center'>
                            <label className='my-3 lead' htmlFor="warning ">Are you sure you want to delete this item?</label>
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
export const mapDispatchProps = {
   deleteAreaAction
}
const mapStateToProps = (state:IStoreState)=>{
    return{
       
    }

}
export default connect(mapStateToProps,mapDispatchProps)(DeleteArea)
