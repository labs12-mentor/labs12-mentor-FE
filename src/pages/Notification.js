import React, { Component } from 'react';

class Notification extends Component {
  constructor(props){
    super(props);
    this.state = {
      read: false,
      textChange: {
        textDecoration: "none"
      }
    }
  }

  toggleRead = (e) => {
    if (!this.state.read) {
      this.setState({
        read: true,
        textChange: {
          textDecoration: "line-through"
        }
      })
    } else {
      this.setState({
        read: false,
        textChange: {
          textDecoration: "none",
        }
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

// }

//connect to redux- need to count unreads
export default Notification;