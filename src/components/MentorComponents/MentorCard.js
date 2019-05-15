import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { getCurrentUser } from "../../actions";

class MentorCard extends React.Component {
  state = {
    user: [],
    mentees: []
  };

  async componentDidMount() {
    await this.props.getCurrentUser();
  
    this.setState({ user: this.props.user });
    
  }

  apply = e => {
    e.preventDefault();
    this.props.createMentee({
      user_id: this.state.user.id,
      wanted_mentor_id: this.props.id,
      deleted: false
    });
  };

  render() {
    return (
      <div>
        <h2>{this.props.id}</h2>
        <Button
          onClick={e => {
            this.apply(e);
          }}
        >
          Apply to This Mentor
        </Button>
      </div>
    );
  }
}

const mstp = state => {
  return {
    user: state.auth.currentUser
  };
};

export default connect(
  mstp,
  { getCurrentUser }
)(MentorCard);
