import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { RegisterService } from '../../services/registerService';
import { register } from '../../actions/login.actions';
import './register.scss'

export default class RegisterUser extends Component<any,any> {
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
    addItem =  async (event)=>{
        event.preventDefault()
        let userToRegister = {
            username:this.unameRef.value,
            password:this.passRef.value,
            email:this.emailRef.value,
            firstname:this.firstNameRef.value,
            lastname:this.lastNameRef.value
        }

        //send this to actions to handle the async behave of the call to the backend
        let registerService = new RegisterService()
        const response = await registerService.register(userToRegister);

        console.log(response);
        
        //TODO::: please handle the bad request with some kind of message to the user 
        //when the the username or email already exist in the database
        // you can take as example the functionality in the login when username or password is not 
        // provided, we have to handle it with local state instead to let html5 validated.
        

        //at success this modal has to be closed.
        //and clean the fields.
        this.toggle();

    }
    toggle = () =>{
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            < div className="register-container">
            <div id="container" onClick={this.toggle}>
                <button className="learn-more">
                    <div className="circle">
                    <span className="icon arrow"></span>
                    </div>
                    <p className="button-text"><span className='sign-up-botton'><span className="button-content">Sign up</span></span></p>
                </button>
            </div>
          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
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
                    <Button className='btn btn-block ' type='submit' color="dark" >Sign Up</Button>


                </form>
                
            </ModalBody>
          </Modal>
        </div>
        )
    }
}