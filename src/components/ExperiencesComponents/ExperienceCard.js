import React from "react";
import ExperienceForm from "./ExperienceForm";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ExperienceCard extends React.Component {
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
        <h4>{this.props.name}</h4>
        <button onClick={this.props.updateExperience}>Edit</button>
        <button
          onClick={() => {
            props.deleteExperience(props.experience.id);
          }}
        >
          delete
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalBody>
            <ExperienceForm canEdit={true} id={this.props.id} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ExperienceCard;
