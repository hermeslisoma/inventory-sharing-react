import React, { Component, SyntheticEvent } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { IStoreState, IStateInventory } from '../../../reducers/globalState.models.';
import {updateInventoryAction} from '../../../actions/inventory.actions'

interface myProps{
    inventory:IStateInventory,
    updateInventoryAction:(id:number,inventory:IStateInventory)=>{},
    className:string
}
class EditButton extends Component<myProps,any> {
    state = {
        modal:false
    }
    nameRef:any ;
    descriptionRef:any;

    constructor(props) {
      super(props);
      this.nameRef = React.createRef();
      this.descriptionRef = React.createRef();


    }
    componentDidMount(){

    }
    updateInventory = (e:SyntheticEvent)=>{
        e.preventDefault();
        let inventory:IStateInventory = {
            id:this.props.inventory.id,
            name:this.nameRef.value,
            description:this.descriptionRef.value,
            levelId:this.props.inventory.levelId
        }
        this.props.updateInventoryAction(inventory.id,inventory);
        this.toggle();
    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        const {name,description} = this.props.inventory;
        return (
            <div >
            <i className={`fas fa-edit ${this.props.className}`} onClick={this.toggle}></i>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Edit inventory</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.updateInventory} className=''>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='name' 
                            className="form-control"
                            name='name'
                            placeholder='name to update'
                            required    
                            min= '0'
                            ref = {input=>this.nameRef = input}
                            defaultValue = {name}
                    />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='description' 
                            className="form-control"
                            name='description'
                            placeholder='Description to update'
                            required    
                            min= '0'
                            ref = {input=>this.descriptionRef = input}
                            defaultValue = {description}
                    />
                    </div>
                    <Button className='btn btn-block ' type='submit' color="warning" >Update inventory</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </div>
        )
    }
}
export const mapDispatchProps = {
    updateInventoryAction
}
const mapStateToProps = (state:IStoreState)=>{
    return{
       
    }

}
export default connect(mapStateToProps,mapDispatchProps)(EditButton);