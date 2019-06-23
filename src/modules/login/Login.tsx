import React, { Component, SyntheticEvent } from 'react'
import './Login.scss'
import inventoryLogo from '../../statics/images/inventoryLogo.png'
import { connect } from 'react-redux';
import classnames from 'classnames'
import { IStoreState } from '../../reducers/globalState.models.';
import { login } from '../../actions/login.actions';
import { RouteComponentProps } from 'react-router';
import  RegisterUser from './Register';

interface ILoginProps extends RouteComponentProps{
    // currentUser: User
    errorMessage: string
    login: (username:string, password:string, history)=>void
}



class Login extends Component<ILoginProps, any>{
    //state to handle the form validation
    state = {
        error:{
            username : '',
            password : '',
        },
        messageFromApi: ''

      };
    usernameRef:any;
    passwordRef:any;
   
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    // componentDidUpdate(){
    //     if (localStorage.getItem("loginUser")){
    //         this.props.history.push('/reimbursements')
    //     }
    // }
    componentDidMount(){
        if (localStorage.getItem("loginUser")){
            // this.props.history.push('/home')
        }
    }
    onHandleLogin = (e:SyntheticEvent) => {
        e.preventDefault();
    
        let username = this.usernameRef.value;
        let password = this.passwordRef.value;
        
        if(username === ''){
            this.setState({...this.state,error:{...this.state.error,
                username:'username is required'
            }})
        }
        else if(password === ''){
            this.setState({...this.state,error:{...this.state.error,
                password:'password is required'
            }})
        }else{
           // this.props.updateState()
           this.setState({...this.state,error:{...this.state.error,
               username:'',
               password:''
            }})
            console.log('try to login with::',username,password);
            
            // this.props.login(data)
            this.props.login(username, password, this.props.history)
            //this.props.loginUserAction(data)
            
            
        }
        

        
       
    }
    render(){
        
    return (
        <div className= "login container" >
            
            <div className="logincontainer">
            
                    <div className="center text-center">
                    <span className="display-4 mx-auto ">Inventory App</span>
                        <div className="imagecontainer mb-3 ">
                            <img className="img-fluid" src={inventoryLogo} alt=""/>   
                        </div>
                        
                        <form onSubmit={this.onHandleLogin} className='loginForm card p-4'>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    id="login" 
                                    className={classnames("form-control ",{'is-invalid':this.state.error.username})} 
                                    name="login" 
                                    placeholder="username" 
                                    ref = {(input)=>{this.usernameRef=input}}
                                    
                                    />
                                    {this.state.error.username &&
                                        <div className="invalid-feedback">
                                                {this.state.error.username}
                                        </div>
                                    }
                                    
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    id="password" 
                                    className={classnames("form-control ",{'is-invalid':this.state.error.password})}
                                    name="password" 
                                    placeholder="password"
                                    ref = {(input)=>{this.passwordRef=input}}
                                    />
                                    {this.state.error.password &&
                                        <div className="invalid-feedback">
                                                {this.state.error.password}
                                        </div>
                                    }
                            </div>
                            
                            <button  type="submit" className="btn btn-block btn-warning" >Log In</button>
                        </form>
                        <RegisterUser/>
                    </div>
                    
                </div>
                
            </div>
        )
     } 
}

const mapStateToProps = (state:IStoreState) =>{
    
    return {
        loginState: state.loginState
    }
}

const mapDispatchToProps = {
    login : login
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);