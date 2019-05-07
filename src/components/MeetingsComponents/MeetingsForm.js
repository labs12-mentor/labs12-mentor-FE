import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class MeetingsForm extends React.Component {
    state = {
        // title: "",
        // startTime: "",
        // endTime: "",
        // location: "",
        // description: ""
        content: "",
        match_id: "",
        deleted: false
    };

    creatingMeetingForm = e => {
        e.preventDefault();
        this.props.addMeeting(this.state);
    };

    render() {
        return (
            <div>
                <h1> Create a Meeting Form</h1>
                <Form onSubmit={this.creatingMeetingForm}>
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

                    {/* <FormGroup>
                        <Label>End Time</Label>
                        <Input type="text" name="endTime" placeholder="Date / Time" />
                    </FormGroup> */}
                    {/* // // 
// //                     <FormGroup>
// //                         <Label>Location</Label>
// //                         <Input
// //                             type="text"
// //                             name="location"
// //                             placeholder="Where is the meeting taking place?"
// //                         />
// //                     </FormGroup>

// //                     <FormGroup>
// //                         <Label>Description</Label>
// //                         <Input
// //                             type="text"
// //                             name="description"
// //                             placeholder="What is the meeting about?"
// //                         />
// //                     </FormGroup> */}

                    <Button type="submit">Submit</Button>
                </Form>
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

export default MeetingsForm;
