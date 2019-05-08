import React, { Component } from 'react';
import { connect } from 'react-redux';

import { markNotification } from '../actions/notifications';

class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            read: this.props.read,
            textChange: {
                textDecoration: "none"
            },
            notificationCount: this.props.notificationCount,
        }
    }

    toggleRead = (e) => {
        let count = this.state.notificationCount;
        let id = this.props.id;
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
        this.props.markNotification(id);
        console.log('count', count);
        console.log('state', this.state.notificationCount)
    }

    render(){
        const { textChange } = this.state;
        return (
            <div style={textChange}
                onClick={this.toggleRead}>
                <p>{this.props.notification}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notificationCount: state.notifications.notificationCount,
    }
}

//connect to redux
export default connect(mapStateToProps, { markNotification })(Notification);

//connect to redux- need to count unreads