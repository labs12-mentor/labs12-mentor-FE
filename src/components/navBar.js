import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotificationButton from '../pages/NotificationButton';
import history from '../history';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  logOut = () => {
    localStorage.removeItem("Authorization");
    // this.setState({ loggedIn: false });
    history.push('/');
  }
  
  render(){
    console.log('logout props', this.props);
    return(
      <div>
        <p>Hello from navbar!</p>
        {this.props.loggedIn ? 
          <div>
            <Link to='/user/student/profile'>
              <button>Profile</button>
            </Link>
            <Link to='/user/meetings'>
              <button>Meetings</button>
            </Link>
            <NotificationButton />
            <button onClick={this.logOut}>Log Out</button>
          </div>
        : 
          <div>
            <Link to='/user/login'>
              <button>Login</button>
            </Link>
            <Link to='/user/register'>
              <button>Register</button>
            </Link>
          </div>}
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