import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { getNotifications } from '../actions/notifications';

class NotificationButton extends Component {
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
                <Link to='/user/notifications'>
                    <Button>
                        {/* make button an image */}
                        <span>Notifications!</span>

                        {/* display notification count */}
                        {this.state.pageLoaded ? (
                            <span>{this.props.notificationsCount}</span>
                        ) : null}
                    </Button>
                </Link>
            </div>
        );
    }
}

NotificationButton.propTypes = {
    notificationsCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
    return {
        notificationsCount: state.notifications.notifications.filter(
            (elem) => elem.watched === false
        ).length
    };
};

//connect to redux
export default connect(
    mapStateToProps,
    { getNotifications }
)(NotificationButton);

// export default NotificationButton;
