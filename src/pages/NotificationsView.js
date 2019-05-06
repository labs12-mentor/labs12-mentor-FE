import React, { Component } from 'react';
import {connect} from 'react-redux';
import  Notification from './Notification';

//import actions

//import css

class Notifications extends Component {
  constructor(props){
    super(props);
    this.state = {
      notifications: [
        'you have a new match!',
        'your mentor has sent you a message',
        'you have a meeting scheduled for today at 10A'
      ],
    }
  }

  render(){
    const { notifications } = this.state;
    // const { notifications } = this.props.notifications;
    const notificationsCount = notifications.length;
    return(
      <div>
        <h2>Hello from Notifications!</h2>
        <div>
          <h4>Your Notifications: </h4>
          <ul className="notifications-list">
            {notifications.map(notification => {
              return (
                <li key={notification}>
                    <Notification notification={notification} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

//const mapStateToProps = state => {

// }

//connect to redux
export default Notifications;
