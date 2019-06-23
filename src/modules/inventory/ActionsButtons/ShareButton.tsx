
import React, { Component, SyntheticEvent } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { PermissionService } from '../../../services/permissionService';
import { IStateInventory,} from '../../../reducers/globalState.models.';
import MakePublic from './MakePublic';

interface myProps{
  inventory:IStateInventory,
  className:string,
  currentUser:any,
  figure:string
}
export default class ShareButton extends Component<myProps,any> {
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
    shareWithUser = async (e:SyntheticEvent)=>{
      e.preventDefault();
        let username= this.usernameRef.value;
        let inventory = this.props.inventory;
        let  permissionService = new PermissionService();
        let response = await permissionService.sharePermissionToUser(inventory,username,1);
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
            <ModalHeader toggle={this.toggle}>Share with a user</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.shareWithUser} className=''>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='username' 
                            className="form-control"
                            name='username'
                            placeholder='Insert the username'
                            required    
                            min= '0'
                            ref = {input=>this.usernameRef = input}
                    />
                    </div>
                    <Button className='btn btn-block  ' type='submit' color="primary" >Share with this user</Button>
                    
                </form>
                <div className="d-flex justify-content-center my-3">
                        <MakePublic inventory = {this.props.inventory} 
                                  currentUser= {this.props.currentUser} 
                                  figure= {this.props.figure} className="text-danger" toggleFather = {this.toggle}/>
                    </div>
                
            </ModalBody>
          </Modal>
        </div>
        )
    }
}