import React from "react";
import { connect } from "react-redux";
import MeetingsForm from "../components/MeetingsComponents/MeetingsForm.js";
import MeetingsList from "../components/MeetingsComponents/MeetingsList";
import {
    createMeeting,
    deleteMeeting,
    updateMeeting,
    getSpecificMeeting
} from "../actions";

class MeetingsContainer extends React.Component {
    render() {
        return (
            <div>
                <MeetingsList
                    deleteMeeting={this.removeMeeting}
                    updateMeeting={this.editMeeting}
                    getSpecificMeeting={this.getMeeting}
                />
                <MeetingsForm addMeeting={this.props.createMeeting} />
            </div>
        );
    }
    removeMeeting = id => {
        //this.props.deleteMeeting(id);
        console.log("hi");
    };

    editMeeting = (id, info) => {
        //this.props.updateMeeting(id, info)
        console.log("hi");
    };

    getMeeting = id => {
        //this.props.getSpecificMeeting(id);
    };

    addMeeting = () => {};
}

export default connect(
    null,
    { createMeeting, deleteMeeting, updateMeeting, getSpecificMeeting }
)(MeetingsContainer);
