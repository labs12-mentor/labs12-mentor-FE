import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import {
  getCurrentUser,
  createMatch,
  deleteMatch,
  getSpecificMentee,
  getMentees
} from "../../actions";

class MentorCard extends React.Component {
  state = {
    user: [],
    mentees: [],
    connect_id: null
  };

  async componentDidMount() {
    await this.props.getCurrentUser();
    await this.props.getMentees();
    //await this.props.getSpecificMentee(this.state.user.id)
    this.setState({
      ...this.state,
      user: this.props.user,
      mentees: this.props.mentees
    });
    //this.setState({connect: this.state.mentees.filter(id => {return id.user_id === this.state.user.id})});
    //const connect = this.state.mentees.filter(id => {return id.user_id === this.state.user.id});
    this.setState({
      ...this.state,
      connect_id: this.state.mentees.filter(id => {
        return id.user_id === this.state.user.id;
      })
    });
    console.log(this.state);
  }

  apply = e => {
    // need to have the mentee id of the user.
    //const connect = this.state.mentees.filter(id => {return id === this.state.user.id});
    // console.log(connect)
    const number = this.state.connect_id[0].id;
    e.preventDefault();
    this.props.createMatch({
      status: "undecided",
      mentor_id: this.props.id,
      mentee_id: number,
      deleted: false
    });
  };

  // deleteApplication = e => {
  //     e.preventDefault();
  //     this.props.deleteMatch(this.state.user.id)
  // }
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
        <Button
          onClick={e => {
            this.deleteApplication(e);
          }}
        >
          Remove Application
        </Button>
      </div>
    );
  }
}

const mstp = state => {
  return {
    user: state.auth.currentUser,
    mentees: state.mentees.mentees
  };
};

export default connect(
  mstp,
  { getCurrentUser, createMatch, deleteMatch, getSpecificMentee, getMentees }
)(MentorCard);
