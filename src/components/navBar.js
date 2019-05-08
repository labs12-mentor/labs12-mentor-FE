import React, { Component } from 'react';
import NotificationButton from '../pages/NotificationButton';

//actions

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: true,
    }
  }

  componentDidMount(){
    //check loggedin status

    //if logged in:
    //this.setState({ loggedIn: true })
  }

  render(){
    return(
      <div>
        <p>Hello from navbar!</p>
        {this.state.loggedIn ? 
          <div>
            <NotificationButton />
            <button>Log Out</button>
          </div>
        : 
          <div>
            <button>Login</button>
            <button>Register</button>
          </div>}
      </div>
    )
  }
}

export default NavBar;