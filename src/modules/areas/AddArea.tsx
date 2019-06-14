import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

export class AddArea extends Component<any,any> {
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
    addArea = ()=>{
        let area = {
            title:this.titleRef.value,
            description:this.descriptionRef.value,
        }

    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            <div className='AddArea-container'>
            
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
    
}
const mapStateToProps = (state) =>{
    return {

    };
}
export default connect(mapStateToProps,mapDispatchProps)(AddArea);
