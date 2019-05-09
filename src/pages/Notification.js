import React, { Component } from 'react';
import { connect } from 'react-redux';

import { markNotification } from '../actions/notifications';

class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            textChange: {
                
            },
        }
    }

    toggleRead = (e) => {
        e.preventDefault();
        let count = this.props.notifications.filter(elem => elem.watched !== false).length;
        let id = this.props.id;
        this.props.markNotification(id);
        console.log('count', count);
        console.log('state', this.props.notifications.length)
    }

    render(){
        const { textChange } = this.state;
        return (
            <div style={{textDecoration: this.props.watched? "line-through" : "none"}}
                onClick={this.toggleRead}>
                <p>{this.props.notification}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notifications: state.notifications.notifications,
    }
}

//connect to redux
export default connect(mapStateToProps, { markNotification })(Notification);

//connect to redux- need to count unreads