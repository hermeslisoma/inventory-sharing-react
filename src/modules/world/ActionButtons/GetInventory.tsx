
import React, { Component, SyntheticEvent } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { PermissionService } from '../../../services/permissionService';
import { IStateInventory } from '../../../reducers/globalState.models.';

interface myProps{
  inventory:IStateInventory,
  className:string,
  currentUser:any,
  figure:string
}
export default class GetInventory extends Component<myProps,any> {
    state = {
        modal:false
    }
    usernameRef:any;
    descriptionRef:any;
    
    constructor(props) {
      super(props);
      this.usernameRef = React.createRef();
      this.descriptionRef = React.createRef();
  

    }
    getInventory = async (e:SyntheticEvent)=>{
      e.preventDefault();
        let username= this.props.currentUser.username;
        let inventory = this.props.inventory;
        let  permissionService = new PermissionService();
        let response = await permissionService.sharePermissionToUser(inventory,username,2);
        //TODO:: use the response to let the user success or failure or user not found in database
        //        
        console.log('this is the response::',response);
        this.toggle();
        

    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            <div >
                <i className={`${this.props.figure} ${this.props.className}`}  onClick={this.toggle}></i>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Get this inventory</ModalHeader>
                        <ModalBody>
                            <form  onSubmit={this.getInventory} className=' m-2'>

                                <div className= 'd-flex justify-content-center'>
                                    <label className='my-3 lead' htmlFor="warning ">Are you sure you want to get this inventory?</label>
                                </div>
                                
                                <br/>
                                <div className='w-100 d-flex justify-content-around'>
                                    <Button type='submit' color="info" >Yes, get it</Button>
                                    <Button  onClick={this.toggle} color="secondary" >No, cancel</Button>
                                </div>
                                


                            </form>
                            
                        </ModalBody>
                </Modal>
            </div>
        )
    }
}