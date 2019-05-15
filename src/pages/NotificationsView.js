import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notification from './Notification';

//import actions
import { getNotifications } from '../actions';

//import css

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoaded: false
        };
    }

    async componentDidMount() {
        await this.props.getNotifications();
        this.setState({ pageLoaded: true });
    }

    render() {
        return (
            <div>
                <h2>Hello from Notifications!</h2>
                {this.state.pageLoaded ? (
                    <div>
                        <h4>Your Notifications: </h4>
                        <ul className='notifications-list'>
                            {this.props.isFetching ? <p>waiting for notifications list</p> : null}
                            {this.props.notification_error ? (
                                <p>cannot get notifications at this time</p>
                            ) : null}
                            {this.props.notifications.map((notification) => {
                                return (
                                    <li key={notification.id}>
                                        <Notification
                                            id={notification.id}
                                            notification={notification.content}
                                            watched={notification.watched}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : null}
            </div>
        );
    }
}

Notifications.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    notifications: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.notifications.isFetching,
        notifications: state.notifications.notifications,
        notification_error: state.notifications.error
    };
};

//connect to redux
export default connect(
    mapStateToProps,
    { getNotifications }
)(Notifications);
