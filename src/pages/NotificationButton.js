import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { getNotifications } from '../actions/notifications';

import { theme } from '../themes.js';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

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
                <MuiThemeProvider theme={theme}>
                    <Badge badgeContent={this.props.notificationsCount} color="error">
                        <NotificationsIcon />
                    </Badge>
                </MuiThemeProvider>
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
