import React from "react";
import {connect} from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {createMeeting, updateMeeting} from "../../actions/meetings.js"

class MeetingsForm extends React.Component {
    state = {
        title: "",
        startTime: "",
        endTime: "",
        location: "",
        // description: ""
        content: "",
        match_id: "",
        deleted: false
    };

    creatingMeetingForm = e => {
        e.preventDefault();
        this.props.createMeeting(this.state);
    };

    render() {
        return (
            <div>
                <h1> Create a Meeting Form</h1>
                <Form onSubmit={this.creatingMeetingForm}>

                <FormGroup>
                        <Label>Title</Label>
                        <Input
                            type="text"
                            name="title"
                            placeholder="title"
                            onChange={this.handleChanges}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Content</Label>
                        <Input
                            type="text"
                            name="content"
                            placeholder="content"
                            onChange={this.handleChanges}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Match ID</Label>
                        <Input
                            type="text"
                            name="match_id"
                            placeholder="match_id"
                            onChange={this.handleChanges}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Start Time</Label>
                        <Input 
                          type="text" 
                          name="startTime" 
                          placeholder="Date / Time" />
                    </FormGroup>

                    <FormGroup>
                        <Label>End Time</Label>
                        <Input
                          type="text"
                          name="endTime"
                          placeholder="End Time"
                        />
                    </FormGroup>
                     
                    <FormGroup>
                        <Label>Location</Label>
                        <Input
                          type="text"
                          name="location"
                          placeholder="Where is the meeting taking place?"
                        />
                    </FormGroup>



                    <Button type="submit">Submit</Button>
                </Form>

                <Button onClick={this.updateMeeting}></Button>
            </div>
        );
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };
}



export default connect(
    null,
    {createMeeting}
)(MeetingsForm);

