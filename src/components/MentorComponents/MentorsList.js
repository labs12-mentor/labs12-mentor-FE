import React from "react";
import { connect } from "react-redux";
import { getMentors } from "../../actions/mentors.js";
import { createMentee } from "../../actions/mentees";
import MentorCard from "./MentorCard.js";
import MentorForm from "./MentorForm.js";
import { Button, Modal, ModalBody } from "reactstrap";

class MentorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoading: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  componentDidMount() {
    this.props.getMentors();
    this.setState({ isLoading: true });
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

    if (this.state.applied === true) {
      return <h2>You have applied</h2>;
    } else {
      return (
        <div>
          <h1>You Can Only Apply To One Mentor</h1>
          <Button color="primary" onClick={this.toggle}>
            Apply to be a Mentor Instead
          </Button>
          {this.state.isLoading ? (
            this.props.mentors.map((mentor, index) => {
              return (
                <MentorCard
                  key={index}
                  id={mentor.id}
                  createMentee={this.props.createMentee}
                />
              );
            })
          ) : (
            <h3>Loading</h3>
          )}


          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            external={externalCloseBtn}
          >
            <ModalBody>
              <MentorForm 
              userId={this.props.userId}
              />
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    mentors: state.mentors.mentors
  };
}
export default connect(
  mapStateToProps,
  { getMentors, createMentee }
)(MentorsList);
