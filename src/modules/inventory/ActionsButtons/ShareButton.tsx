
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

class ShareButton extends Component<any,any> {
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
    shareWithUser = ()=>{
        let username= this.usernameRef.value;
        

    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            <div >
            <i className="fas fa-share-alt" onClick={this.toggle}></i>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
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
export default connect(mapStateToProps,mapDispatchProps)(ShareButton);