import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotificationButton from '../pages/NotificationButton';
import history from '../history';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

class NavBar extends Component {
  logOut = () => {
    localStorage.removeItem("Authorization");
    history.push('/');
  }
  
  render(){
    console.log('logout props', this.props);
    return(
      <div>
      {this.props.loggedIn ? 
        <Navbar>
          {/* get the user's org logo*/}
          <NavbarBrand>Org Logo Here</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/user/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/user/meetings">Meetings</NavLink>
            </NavItem>
            <NotificationButton />
            <Button onClick={this.logOut} color="info">Log Out</Button>
          </Nav>
        </Navbar>
        : 
        <Navbar>
          <NavbarBrand>Mentor Match Logo</NavbarBrand>
          <Nav>
            <Link to='/user/login'>
              <Button color="primary">Login</Button>
            </Link>
            <Link to='/user/register'>
              <Button color="info">Register</Button>
            </Link>
          </Nav>
        </Navbar>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.token,
  }
}

export default connect(mapStateToProps, {})(NavBar);