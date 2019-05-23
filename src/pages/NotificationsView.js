import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notification from './Notification';

//import actions
import { getNotifications } from '../actions';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 80px auto;
    width: 80%;
`;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
    card: {
        minWidth: 275,
        maxHeight: 500,
        overflow: 'auto',
    },
});

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoaded: false,
            dense: false,
        };
    }

    async componentDidMount() {
        await this.props.getNotifications();
        this.setState({ 
            pageLoaded: true,
        });
    }

    render() {
        const { classes } = this.props;
        const { dense } = this.state;
        return (
            <AppContainer>
                <div className={classes.root}>
                    <Typography variant="h6" className={classes.title}>
                        Your Notifications
                    </Typography>
                    {this.state.pageLoaded ? (
                        <Card className={classes.card}>
                            <CardContent>
                                <List dense={dense}>
                                    {this.props.isFetching ? <p>waiting for notifications list</p> : null}
                                    {this.props.notification_error ? (
                                        <p>cannot get notifications at this time</p>
                                    ) : null}
                                    {this.props.notifications.map((notification) => {
                                        if (!notification.watched){
                                            return (
                                                <ListItem key={notification.id}>
                                                    <Notification
                                                        id={notification.id}
                                                        notification={notification.content}
                                                        watched={notification.watched}
                                                    />
                                                </ListItem>
                                            );
                                        }
                                    })}
                                </List>
                            </CardContent>
                        </Card>
                    ) : null}
                </div>
            </AppContainer>
        );
    }
}

Notifications.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    notifications: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
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
)(withStyles(styles)(Notifications));
