import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMeetings } from "../../actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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
    this.setState({ isLoaded: true });
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
    return (
      <div>
        <h1>Your Meetings</h1>

        <h2>Upcoming Meetings</h2>
        {this.state.isLoaded ? (
          this.props.meetingsList.map((meeting, index) => {
            return (
              <div key={index}>
                <Link to={`/user/meetings/${meeting.id}`}>Title</Link>
                <MeetingCard
                  id={meeting.id}
                  content={meeting.content}
                  match_id={meeting.match_id}
                  // deleteMeeting={this.props.deleteMeeting}
                />
                <Button
                  color="danger"
                  onClick={() => {
                    this.props.deleteMeeting(this.props.id);
                  }}
                >
                  Delete
                </Button>
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
