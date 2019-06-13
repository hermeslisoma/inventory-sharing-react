import React, { Component } from 'react' ;
import './Header.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Nav,
        NavItem,
        Navbar,
        NavbarBrand,
        NavbarToggler,
        Collapse
    } from 'reactstrap'



interface MyProps {
    value?:string
    history?:any,
    dispatch:any,
    
}
class Header extends Component<MyProps,any>{
    state = {
        dropdownOpen: false,
        dropdownSettings: false,
        collapsed:true
    }
    componentDidMount(){
        console.log(this.props)
    }
    logout = ()=>{
        //this.props.dispatch(logout());
        localStorage.removeItem("loginUser");
    }
    toggle = () => {
            this.setState({
              dropdownOpen: !this.state.dropdownOpen
            });
          }
    toggleSetting = () => {
            this.setState({
                dropdownSettings: !this.state.dropdownSettings
            });
          }   
    toggleNavbar = ()=>{
        this.setState({
            collapsed: !this.state.collapsed
          });
        
    } 
    render(){
        // if(!this.props.loginState.isAuthenticated)
        // {
        //     return (
        //         <Nav  >
        //         </Nav >
        //     )
        // }
        return ( 
            <div className = "header" >
        <Navbar color="faded" light expand="sm">
          <NavbarBrand to ='/' className="mr-auto"><img className="img-fluid" src=""  height='50px' width='50px' alt=""/> </NavbarBrand>
          
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar >
               <NavItem className="nav-item">
                    <Link to ='/' className="nav-link active">Login</Link>    
                </NavItem>
                <NavItem className="nav-item">
                    <Link to ='/home' className="nav-link">Home</Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link to ='/inventories' className="nav-link">Inventory</Link>
                </NavItem>
                <NavItem className="nav-item">
                    <Link to ='/areas' className="nav-link">Areas</Link>
                </NavItem>
                
            
        </Nav>
              </Collapse></Navbar>
            </div>
            
        )
                    }
    
}
export default connect()(Header);