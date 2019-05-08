import React, { Component } from 'react';
import { connect } from 'react-redux';


import { markNotification } from '../actions/notifications';

class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            read: false,
            textChange: {
                textDecoration: "none"
            },
            notificationCount: 0,
        }
    }

    toggleRead = (e) => {
        let count = this.state.notificationCount;
        if (!this.state.read) {
            count--;
            this.setState({
                read: true,
                textChange: {
                    textDecoration: "line-through"
                },
                notificationCount: count
            })
        } else {
            count++;
            this.setState({
                read: false,
                textChange: {
                    textDecoration: "none",
                },
                notificationCount: count
            })
        }
        // console.log('count', count);
        // console.log('state', this.state.notificationCount)
        // this.props.markNotification();
    }

    render(){
        // const notifications = this.props.notificationList;
        const { textChange } = this.state;
        return (
            <div style={textChange}
                onClick={this.toggleRead}>
                    {this.props.notification}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notificationCount: state.notifications.notificationsCount,
    }
}

//connect to redux
export default connect(mapStateToProps, { markNotification })(Notification);

//connect to redux- need to count unreads