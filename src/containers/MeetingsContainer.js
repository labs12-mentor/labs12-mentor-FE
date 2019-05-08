import React from "react";
import { connect } from "react-redux";
import {Button} from "reactstrap";
//import MeetingsForm from "../components/MeetingsComponents/MeetingsForm.js";
import MeetingsList from "../components/MeetingsComponents/MeetingsList";
import {
    deleteMeeting,
    updateMeeting,
    getSpecificMeeting
} from "../actions";

class MeetingsContainer extends React.Component {
    render() {
        return (
            <div>
                <MeetingsList
                    deleteMeeting={this.deleteMeeting}
                    updateMeeting={this.goToForm}
                    getSpecificMeeting={this.getMeeting}
                />
                {/* <MeetingsForm addMeeting={this.props.createMeeting} /> */}
                {/* <Button onClick={this.goToForm}>Add A Meeting</Button> */}
            </div>
        );
    }

    goToForm = () => {
        this.props.history.push("/user/meetings/meetingsForm")
    }

    deleteMeeting = id => {
        this.props.deleteMeeting(id);
        
    };


    getMeeting = id => {
        //this.props.getSpecificMeeting(id);
    };

    removeMeeting = id => {
        console.log("hi")
    }
}

export default connect(
    null,
    { deleteMeeting, updateMeeting, getSpecificMeeting }
)(MeetingsContainer);
