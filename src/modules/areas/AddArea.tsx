import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { IStoreState, IStateInventory, ILoginState } from '../../reducers/globalState.models.';
import { createAreaAction } from '../../actions/area.action';


interface myProps {
    currentInventoryState: IStateInventory,
    loginState:ILoginState,
    createAreaAction:any,
    className:string,
    buttonLabel:string

}

class AddArea extends Component<myProps,any> {
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
    addArea = (event)=>{
        event.preventDefault()
        let area = {
            name:this.titleRef.value,
            description:this.descriptionRef.value
        }

        this.props.createAreaAction(area,this.props.currentInventoryState.id)
        this.toggle()
    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        // console.log(this.props.loginState)
        return (
            <div className='AddInventory-container'>
            
          <Button className='btn btn-secondary text-white' onClick={this.toggle}>{this.props.buttonLabel}</Button>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Create an Area</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.addArea} className=''>
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
                    <Button className='btn btn-block ' type='submit' color="primary" >Create Area</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </div>
        )
    }
}
export const mapDispatchProps = {
    createAreaAction: createAreaAction
}
const mapStateToProps = (state:IStoreState) =>{
    return {
        loginState: state.loginState,
        currentInventoryState: state.currentInventoryState
    }
}

export default connect(mapStateToProps,mapDispatchProps)(AddArea);
