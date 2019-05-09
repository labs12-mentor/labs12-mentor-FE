import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotificationButton from '../pages/NotificationButton';

//actions

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  componentDidMount(){
    //check loggedin status

    //if logged in:
    //this.setState({ loggedIn: true })
  }

  logOut = () => {
    localStorage.clear();
    //should redirect to home '/'
  }

  render(){
    return(
      <div>
        <p>Hello from navbar!</p>
        {this.state.loggedIn ? 
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

export default NavBar;