import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getNotifications } from '../actions/notifications';

class NotificationButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageLoaded: false,
    }
  }

  async componentDidMount() {
    await this.props.getNotifications();
    this.setState({ pageLoaded: true });
  }

  render(){
  console.log('props', this.props);
  const notifications = this.props.notificationList;
  let notificationsCount = 0;
  if(notifications === undefined){
    notificationsCount = 0;
  } else {
    notificationsCount = notifications.length;
  }
    return (
      <div>
        <Link to='/user/notifications'>
          <button>
            {/* make button an image */}
            <span>Notifications!</span>

            {/* display notification count */}
            {this.state.pageLoaded ? 
              <span>{notificationsCount}</span>
              : null }
            {/*<span>0</span>*/}
          </button>
        </Link>
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
export default connect(mapStateToProps, { getNotifications })(NotificationButton);

// export default NotificationButton;
