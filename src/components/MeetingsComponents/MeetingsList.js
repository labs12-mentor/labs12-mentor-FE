import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMeetings } from "../../actions";
import { Button, Modal, ModalBody } from "reactstrap";
import MeetingsForm from "./MeetingsForm";
import MeetingCard from "./MeetingCard";

class MeetingsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoaded: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  async componentDidMount() {
    await this.props.getMeetings();
    this.setState({ ...this.state, isLoaded: true });
  }

  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );

    const nonDeleted = this.props.meetingsList.filter(meeting => {
      return meeting.deleted === false;
    });

    return (
      <div>
        <h1>Your Meetings</h1>

        <h2>Upcoming Meetings</h2>
        {this.state.isLoaded ? (
          nonDeleted.map((meeting, index) => {
            return (
              <div key={index}>
                <Link to={`/user/meetings/${meeting.id}`}>Link</Link>
                <MeetingCard
                  id={meeting.id}
                  content={meeting.content}
                  match_id={meeting.match_id}
                  deleteMeeting={this.props.deleteMeeting}
                />
              </div>
            );
          })
        ) : (
          <h3>Loading</h3>
        )}

        <Button color="primary" onClick={this.toggle}>
          Create New Meeting
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalBody>
            <MeetingsForm canEdit={false} />
          </ModalBody>
        </Modal>

        <h2>Past Meetings</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meetingsList: state.meetings.meetingsList
  };
}

export default connect(
  mapStateToProps,
  { getMeetings }
)(MeetingsList);
