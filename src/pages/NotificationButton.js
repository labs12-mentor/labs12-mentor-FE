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
    return (
      <div>
        <Link to='/user/notifications'>
          <button>
            {/* make button an image */}
            <span>Notifications!</span>

            {/* display notification count */}
            {this.state.pageLoaded ? 
              <span>{this.props.notificationsCount}</span>
            : null}
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notificationsCount: state.notifications.notifications.filter(elem => elem.watched === false).length,
  }
}

//connect to redux
export default connect(mapStateToProps, { getNotifications })(NotificationButton);

// export default NotificationButton;
