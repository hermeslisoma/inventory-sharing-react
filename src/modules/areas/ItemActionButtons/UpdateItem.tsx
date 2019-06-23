import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { IStateItem, IStoreState } from '../../../reducers/globalState.models.';
import{updateItemAction} from '../../../actions/item.actions'
interface myProps {
    item:IStateItem,
    area:any,
    className:string,
    updateItemAction:any
    
}
class UpdateItem extends Component<myProps,any> {
    state = {
        modal:false
    }
    titleRef:any;

    constructor(props) {
      super(props);
      this.titleRef = React.createRef();


    }
    updateItem = (event)=>{
      event.preventDefault()
        let item = {
            id: this.props.item.id,
            name:this.titleRef.value
        }
        this.props.updateItemAction(item)
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
            <i className="fas fa-edit text-warning" onClick={this.toggle}></i>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Edit Item</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.updateItem} className=''>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='title' 
                            className="form-control"
                            name='title'
                            placeholder='title to update'
                            required    
                            min= '0'
                            ref = {input=>this.titleRef = input}
                            defaultValue = {this.props.item.name}
                    />
                    </div>
                    <Button className='btn btn-block ' type='submit' color="primary" >Update Item</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </div>
        )
    }
}
export const mapDispatchProps = {
  updateItemAction
}
const mapStateToProps = (state:IStoreState)=>{
   return{
      
   }

}
export default connect(mapStateToProps,mapDispatchProps)(UpdateItem);