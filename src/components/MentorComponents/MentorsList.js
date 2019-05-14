import React from "react";
import { connect } from "react-redux";
import { getMentors } from "../../actions/mentors.js";
import { createMentee } from "../../actions/mentees";
import MentorCard from "./MentorCard.js";
import MentorForm from "./MentorForm.js";

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
    if (this.state.applied === true) {
      return <h2>You have applied</h2>;
    } else {
      return (
        <div>
          <h1>You Can Only Apply To One Mentor</h1>
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

          <Button color="primary" onClick={this.toggle}>
            Apply to be a Mentor
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            external={externalCloseBtn}
          >
            <ModalBody>
              <MentorForm />
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
