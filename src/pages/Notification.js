import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { markNotification } from '../actions/notifications';

class Notification extends Component {
    constructor(props) {
        super(props);
    }

    toggleRead = (e) => {
        e.preventDefault();
        let id = this.props.id;
        this.props.markNotification(id);
    };

    render() {
        return (
            <div
                style={{ textDecoration: this.props.watched ? 'line-through' : 'none' }}
                onClick={this.toggleRead}
            >
                <p>{this.props.notification}</p>
            </div>
        );
    }
}

Notification.propTypes = {
    notifications: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications.notifications
    };
};

//connect to redux
export default connect(
    mapStateToProps,
    { markNotification }
)(Notification);

//connect to redux- need to count unreads
