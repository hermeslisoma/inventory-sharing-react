import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { IStoreState, IStateInventory, ILoginState, ICurrentAreaState } from '../../reducers/globalState.models.';
import { createAreaAction, setCurrentAreaAction, updateAreaAction } from '../../actions/area.action';
import { Link, RouteComponentProps } from 'react-router-dom';


interface IAddProps extends RouteComponentProps{
    inventoryState: IStateInventory,
    loginState:ILoginState,
    areaState:ICurrentAreaState,
    // setCurrentAreaAction:any,
    updateAreaAction:any
}

export class UpdateArea extends Component<any,any> {
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
    updateArea = (event)=>{
        event.preventDefault()
        console.log('areastate::::::::',this.props.areaState)
        console.log('loginstate::::::',this.props.loginState)
        console.log('inventorystate::::::',this.props.inventoryState)
        let area = {
            id:this.props.areaState.id,
            name:this.titleRef.value,
            description:this.descriptionRef.value,
            inventory:this.props.inventoryState
        }

        this.props.updateAreaAction(area)
        this.toggle()
    }
    toggle = () =>{
        // this.props.setCurrentAreaAction()
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        // console.log(this.props.loginState)
        return (
            <div className='AddInventory-container'>
            
          <Button className="fas fa-edit text-warning" onClick={() => this.toggle()}></Button>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className="modalAddInventory">
            <ModalHeader toggle={this.toggle}>Update Area</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.updateArea} className=''>
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
                    <Button className='btn btn-block ' type='submit' color="primary" >Update Area</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </div>
        )
    }
}
const mapDispatchToProps = {
    // setCurrentAreaAction: setCurrentAreaAction,
    updateAreaAction: updateAreaAction
}
const mapStateToProps = (state:IStoreState) =>{
    return {
        loginState: state.loginState,
        inventoryState: state.currentInventoryState,
        areaState: state.currentAreaState
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateArea);
