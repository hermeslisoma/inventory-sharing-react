import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

class EditButton extends Component<any,any> {
    state = {
        modal:false
    }
    titleRef:any;

    constructor(props) {
      super(props);
      this.titleRef = React.createRef();


    }
    updateItem = ()=>{
        let item = {
            title:this.titleRef.value,
        }

    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            <div >
            <i className="fas fa-edit" onClick={this.toggle}></i>
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
    
}
const mapStateToProps = (state) =>{
    return {

    };
}
export default connect(mapStateToProps,mapDispatchProps)(EditButton);