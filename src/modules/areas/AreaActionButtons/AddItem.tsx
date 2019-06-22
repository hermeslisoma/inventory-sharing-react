import React, { Component, SyntheticEvent } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import '../Areas.scss'
import { IStateArea, IStateItem } from '../../../reducers/globalState.models.';
import {addItemAction} from '../../../actions/item.actions'
interface myProps {
  area:IStateArea,
  addItemAction:any,
  className:string
}
export class AddItem extends Component<myProps,any> {
    state = {
        modal:false
    }
    nameRef:any;
    descriptionRef:any;

    constructor(props) {
      super(props);
      this.nameRef = React.createRef();
      this.descriptionRef = React.createRef();


    }
    addItem = (e:SyntheticEvent)=>{
      e.preventDefault();
        let newItem = {
            name:this.nameRef.value,
            area:{
              id:this.props.area.id
            }
        }
        this.props.addItemAction(newItem);
        this.toggle();

    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            <>
            
          <button className='btn btn-success' onClick={this.toggle}><span className="button-content">Add Item</span></button>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Create an Item</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.addItem} className=''>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='name' 
                            className="form-control"
                            name='name'
                            placeholder='Insert the name'
                            required    
                            min= '0'
                            ref = {input=>this.nameRef = input}
                    />
                    </div>
                    <Button className='btn btn-block ' type='submit' color="primary" >Add Item</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </>
        )
    }
}
export const mapDispatchProps = {
  addItemAction
}
const mapStateToProps = (state) =>{
    return {

    };
}
export default connect(mapStateToProps,mapDispatchProps)(AddItem);
