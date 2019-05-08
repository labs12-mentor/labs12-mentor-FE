import React from "react";
import MeetingsForm from "./MeetingsForm.js";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class MeetingCard extends React.Component {
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

  // editMeeting = () => {this.setReducerState.isEditing to true
  // this.props.history("/user/meetings/meetingsForm")}
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
        <h3>{this.props.content}</h3>
        <h4>Match_id:{this.props.match_id}</h4>

        {/* <button onClick={this.props.updateMeeting}>Edit</button> */}
      <button onClick={() => {this.props.deleteMeeting(this.props.id);}}>
        Delete
      </button>
        <Button color="danger" onClick={this.toggle}>
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalHeader>EDIT </ModalHeader>
          <ModalBody>
            {/* <b>Look at the top right of the page/viewport!</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. */}
            <MeetingsForm 
            canEdit={true}
            id={this.props.id}
            />
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default MeetingCard;
