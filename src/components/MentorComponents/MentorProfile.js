import React from "react";
import { connect } from "react-redux";
import { getSpecificUser } from "../../actions";

class MentorProfile extends React.Component {
  state = {
    isLoaded: false
  };

  async componentDidMount() {
    await getSpecificUser(5);
    this.setState({ ...this.state, isLoaded: true });
  }

  render() {
      console.log(this.props.mentor)
    return (
      <div>
        {this.state.isLoaded ?
        <div>
         <h1>Mentor Profile</h1> 
            {/* <h2>{this.props.mentor.name}</h2> */}
        
            </div>
        : <h2>Loading</h2>}
      </div>
    );
  }
}

const mstp = state => {
  return {
    mentor: state.users.currentUser
  };
};

export default connect(
    mstp,
    {getSpecificUser}
)(MentorProfile);
