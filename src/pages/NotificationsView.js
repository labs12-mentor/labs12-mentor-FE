import React, { Component } from 'react';
import {connect} from 'react-redux';
import  Notification from './Notification';

//import actions
import { getNotifications } from '../actions/notifications';

//import css

class Notifications extends Component {
  constructor(props){
    super(props);
    this.state = {
      // notifications: [
      //   'you have a new match!',
      //   'your mentor has sent you a message',
      //   'you have a meeting scheduled for today at 10A'
      // ],
      pageLoaded: false,
    }
  }

  async componentDidMount(){
    await this.props.getNotifications();
    this.setState({ pageLoaded: true });
  }

  render(){
    // const { notifications } = this.state;
    const notifications = this.props.notificationList;
    // console.log('notifications', notifications);
    // console.log('props', this.props.notificationList[0]);
    return(
      <div>
        <h2>Hello from Notifications!</h2>
        {this.state.pageLoaded ?
        <div>
          <h4>Your Notifications: </h4>
          <ul className="notifications-list">
            {this.props.gettingNotification ? <p>waiting for notifications list</p> : null} 
            {this.props.notification_error ? <p>cannot get notifications at this time</p> : null}
            {notifications.map(notification => {
              return (
                <li key={notification.id}>
                    <Notification notification={notification.content} />
                </li>
              )
            })}
          </ul>
        </div>
        : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gettingNotification: state.notifications.gettingNotifications,
    notificationList: state.notifications.notificationList,
    notification_error: state.notifications.error,
  }
}

//connect to redux
export default connect(mapStateToProps, { getNotifications })(Notifications);
