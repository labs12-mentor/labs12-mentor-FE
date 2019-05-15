import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ApplicationRes extends React.Component {
    render() {
        return (
            <div className='ProfileInfo'>
                <Button>Undecided</Button>
                <Button>Decline</Button>
                <Button>Approve</Button>

                <Form>
                    <FormGroup>
                        <Label for='startDate'>Application Start Date</Label>
                        <Input type='date' name='name' placeholder='date placeholder' />
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' /> Willing to meet students in person.
                        </Label>
                    </FormGroup>

                    <FormGroup>
                        <Label>Location</Label>
                        <Input type='text' />
                        Work or School Zip Code
                        <Input type='text' />
                        Home Zip Code
                    </FormGroup>

                    <FormGroup>
                        <FormGroup>
                            <Label> Interest in Stipend </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' /> $40 / Checkin
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' /> $40 / Checkin donation to local STEM
                            </Label>
                        </FormGroup>

                        <FormGroup>
                            <Label for='participationReason'>
                                In a few sentences, tell us what makes you want to participate in
                                the Mentor Program.
                            </Label>
                            <Input type='textbox' name='participationReason' />
                        </FormGroup>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

ApplicationRes.propTypes = {};

export default ApplicationRes;
