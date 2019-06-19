import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { RegisterService } from '../../services/registerService';
// import './Areas.scss'

export class RegisterUser extends Component<any,any> {
    state = {
        modal:false
    }
    unameRef:any;
    passRef:any;
    emailRef:any;
    firstNameRef:any;
    lastNameRef:any;

    constructor(props) {
      super(props);
      this.unameRef = React.createRef();
      this.passRef = React.createRef();
      this.emailRef = React.createRef();
      this.firstNameRef = React.createRef();
      this.lastNameRef = React.createRef();
      
      


    }
    addItem = (event)=>{
        event.preventDefault()
        let user = {
            username:this.unameRef.value,
            password:this.passRef.value,
            email:this.emailRef.value,
            firstame:this.firstNameRef.value,
            lastname:this.lastNameRef.value
        }
        console.log(user)
        
        let registerService = new RegisterService()

        registerService.register(user)

    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            <div className='AddItem-container'>
            
          <Button className='btn btn-secondary text-white' onClick={this.toggle}><span className="button-content">Register</span></Button>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Register</ModalHeader>
            <ModalBody>
                <form  onSubmit={this.addItem} className=''>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='uname' 
                            className="form-control"
                            name='uname'
                            placeholder='Username'
                            required    
                            min= '0'
                            ref = {input=>this.unameRef = input}
                    />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            id='pass' 
                            className="form-control"
                            name='pass'
                            placeholder='Password'
                            required    
                            min= '0'
                            ref = {input=>this.passRef = input}
                    />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            id='email' 
                            className="form-control"
                            name='email'
                            placeholder='Email'
                            required    
                            min= '0'
                            ref = {input=>this.emailRef = input}
                    />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='firstname' 
                            className="form-control"
                            name='firstname'
                            placeholder='First Name'
                            required    
                            min= '0'
                            ref = {input=>this.firstNameRef = input}
                    />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id='lastname' 
                            className="form-control"
                            name='lastname'
                            placeholder='Last Name'
                            required    
                            min= '0'
                            ref = {input=>this.lastNameRef = input}
                    />
                    </div>
                    {/* <div className="form-group">
                        <input 
                            type="text" 
                            id='uname' 
                            className="form-control"
                            name='uname'
                            placeholder='Username'
                            required    
                            min= '0'
                            ref = {input=>this.unameRef = input}
                    />
                    </div> */}
                    <Button className='btn btn-block ' type='submit' color="primary" >Register User</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {

    };
}
export const mapDispatchToProps = {
    // register:register
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterUser);
