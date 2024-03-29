import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import {saveInventoryByUserIdAction} from '../../actions/inventory.actions'
import { IStoreState, ILoginState } from '../../reducers/globalState.models.';

interface MyProps {
    loginState:ILoginState,
    saveInventoryByUserIdAction,
    buttonLabel:string,
    className:string
    
}

class AddInventory extends Component<MyProps,any> {
    state = {
        modal:false
    }
    titleRef:any;
    descriptionRef:any;

    constructor(props) {
      super(props);
      this.titleRef = React.createRef();
      this.descriptionRef = React.createRef();


    }
    addInventory = (e:any)=>{
        e.preventDefault();
        let inventory = {
            name:this.titleRef.value,
            description:this.descriptionRef.value,
            levelId:1,
            
        }
        this.props.saveInventoryByUserIdAction(inventory,this.props.loginState.currentUser.id);
        this.toggle();

    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            <div className='AddInventory-container'>
            
          <Button className='btn btn-secondary text-white' onClick={this.toggle}>{this.props.buttonLabel}</Button>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Create a Inventory</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.addInventory} className=''>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='title' 
                            className="form-control"
                            name='title'
                            placeholder='Insert the title'
                            required    
                            min= '0'
                            ref = {input=>this.titleRef = input}
                    />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='Description' 
                            className="form-control"
                            name='description'
                            placeholder='Please insert a description'
                            required 
                            ref={input=>this.descriptionRef= input}
                    />
                    </div>
                    <Button className='btn btn-block ' type='submit' color="dark" >Create Inventory</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </div>
        )
    }
}
export const mapDispatchProps = {
    saveInventoryByUserIdAction
}
const mapStateToProps = (state:IStoreState) =>{
    return {
        loginState:state.loginState
    };
}
export default connect(mapStateToProps,mapDispatchProps)(AddInventory);
