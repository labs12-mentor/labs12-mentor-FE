import React, { Component } from 'react';

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

    componentDidMount(){
        this.setState({
            notificationCount: this.props.notificationCount,
        })
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
    }

    render(){
        const { textChange } = this.state;
        return (
            <div style={textChange}
                onClick={this.toggleRead}>
                    {this.props.notification}
            </div>
        )
    }
}

//const mapStateToProps = state => {
    //update notificationCount
// }

//connect to redux- need to count unreads
export default Notification;