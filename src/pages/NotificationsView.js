import React, { Component } from 'react';
import {connect} from 'react-redux';
import  Notification from './Notification';

//import actions
import { getNotifications } from '../actions/notificationActions';

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

  componentDidMount(){
    this.props.getNotifications();
  }

  render(){
    // const { notifications } = this.state;
    const { notifications } = this.props.notifications;
    // const notificationsCount = notifications.length;
    console.log('notifications props', this.props.notifications);
    return(
      <div>
        <h2>Hello from Notifications!</h2>
        <div>
          <h4>Your Notifications: </h4>
          <ul className="notifications-list">
          {this.props.notifications ? 
              notifications.map(notification => {
                return (
                  <li key={notification}>
                    <Notification notification={notification} />
                  </li>
                )
              })
            : <p>waiting for notifications list</p>}
            {/*notifications.map(notification => {
              return (
                <li key={notification}>
                    <Notification notification={notification} />
                </li>
              )
            })*/}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notificationList: state.notifications.notificationList,
    notification_error: state.notifications.error,
  }
}

//connect to redux
export default connect(mapStateToProps, { getNotifications })(Notifications);
