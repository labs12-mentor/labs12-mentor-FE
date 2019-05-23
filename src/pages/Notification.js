import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Clear from "@material-ui/icons/Clear";
import Button from "../material-components/CustomButtons/Button.jsx";
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';


import { markNotification } from '../actions/notifications';

class Notification extends Component {
    // constructor(props) {
    //     super(props);

    // }
    
    // toggleRead = (e) => {
    //     e.preventDefault();
    //     let id = this.props.id;
    //     this.props.markNotification(id);
    // };

    render() {
        const id = this.props.id;
        return (
            <div style={{ display: 'flex' }}>
                <IconButton style={{color: "#00bcd4"}}>
                    <MailIcon />
                </IconButton>
                <p style={{ paddingTop: "10%" }}>{this.props.notification}</p>
                <ListItemSecondaryAction>
                    <Button
                        justIcon
                        size="sm"
                        color="danger"

                        //no refresh on delete
                        onClick={() => {
                            this.props.markNotification(id)
                        }}
                    >
                        <Clear style={{ fontSize: 40 }} />
                    </Button>
                </ListItemSecondaryAction>
            </div>
        );
    }
}

Notification.propTypes = {
    notifications: PropTypes.array.isRequired,
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
