
import React, { Component, SyntheticEvent } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { PermissionService } from '../../../services/permissionService';
import { IStateInventory } from '../../../reducers/globalState.models.';
import { UserService } from '../../../services/userService';

interface myProps{
  inventory:IStateInventory,
  className:string
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
        let response = await permissionService.sharePermissionToUser(inventory,username);
        //TODO:: use the response to let the user success or failure or user not found in database
        //        
        console.log('this is the response::',response);
        this.toggle();
        

    }
    shareWithAll = async (e:SyntheticEvent)=>{
      e.preventDefault()
      let userService = new UserService()
      let usernames = await userService.getAllUsers();
      let permissionService = new PermissionService()
      console.log(usernames)
      let inventory = this.props.inventory;

      usernames.forEach(async element => {
        // console.log(element.username)
        let response = await permissionService.sharePermissionToUser(inventory, element.username)
        console.log('response:::::', response)
      });
      this.toggle()
    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            <div >
            <i className={`fas fa-share-alt ${this.props.className}`}  onClick={this.toggle}></i>
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
                    <Button className='btn btn-block ' type='submit' color="primary" >Share with this user</Button>
                    <Button className='btn btn-block' type='button' color="success" onClick={this.shareWithAll}>Make Public</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </div>
        )
    }
}