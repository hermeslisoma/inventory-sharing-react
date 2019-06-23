import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { IStoreState, IStateArea } from '../../../reducers/globalState.models.';
import { updateAreaAction } from '../../../actions/area.action';
import { Area } from '../../../services/models/Models';


interface myProps {
    area:IStateArea,
    updateAreaAction:any,
    className:string
}

export class UpdateArea extends Component<myProps,any> {
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
        
        let newArea:Area = {
            id:this.props.area.id,
            name:this.titleRef.value,
            description:this.descriptionRef.value
        }

        this.props.updateAreaAction(newArea)
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
            <>
        <button className='btn btn-warning' onClick={this.toggle}>
                <span>Update Area</span>
            </button>
          
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
                            defaultValue = {this.props.area.name}
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
                            defaultValue = {this.props.area.description}
                    />
                    </div>
                    <Button className='btn btn-block ' type='submit' color="warning" >Update Area</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </>
        )
    }
}
const mapDispatchToProps = {
    // setCurrentAreaAction: setCurrentAreaAction,
    updateAreaAction: updateAreaAction
}
const mapStateToProps = (state:IStoreState) =>{
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateArea);
