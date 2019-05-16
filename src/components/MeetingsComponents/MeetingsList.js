import React from "react";
import { connect } from "react-redux";
import { getMeetings } from "../../actions";
import MeetingsForm from "./MeetingsForm";
import MeetingCard from "./MeetingCard";
import styled from 'styled-components';
import MaterialSideBar from "../MaterialSideBar";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 10px;
`;

const MeetingContainer = styled.div`
    width: 70%;
    margin: auto;
`;

class MeetingsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      open: false
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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {


    const nonDeleted = this.props.meetings.filter(meeting => {
      return meeting.deleted === false;
    });
    
    return (
      <div>
        <h1>Your Meetings</h1>
          <ContainerDiv>
          <MaterialSideBar />
          <MeetingContainer>
          <h2>Upcoming Meetings</h2>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Create New Meeting
        </Button>

          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
          <MeetingsForm canEdit={false} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

          {this.state.isLoaded ? (
            nonDeleted.map((meeting, index) => {
              return (
                <div key={index}>
                  
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




          <h2>Past Meetings</h2>
          
          </MeetingContainer>
        </ContainerDiv>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meetings: state.meetings.meetings
  };
}

export default connect(
  mapStateToProps,
  { getMeetings }
)(MeetingsList);
