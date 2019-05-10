import React from "react";
import MatchForm from "./MatchForm";
import { Button, Modal, ModalBody, } from "reactstrap";

class MatchesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
        <h4>{this.props.match.id}</h4>
        <h4>{this.props.match.status}</h4>

        <button
          onClick={e => {
            this.props.deleteExperience(e, this.props.match.id);
          }}
        >
          delete
        </button>
        <Button color="warning" onClick={this.toggle}>
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalBody>
            <MatchForm
              canEdit={true}
              menteeId={this.props.match.mentee_id}
              mentorId={this.props.match.mentor_id}
              status={this.props.match.status}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MatchesCard;
