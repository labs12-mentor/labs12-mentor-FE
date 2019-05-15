import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class ProfileForms extends React.Component {
    render() {
        return (
            <div className='ProfileForms'>
                <Form>
                    <FormGroup>
                        <Label for='profileLinks'>Profile Links</Label>
                        <Input type='textarea' name='profileLinks' />
                    </FormGroup>
                    <Button>Add Profile Link Option</Button>

                    <FormGroup>
                        <Label for='interests'>Interests</Label>
                        <Input type='textarea' name='interests' />
                    </FormGroup>
                    <Button>Add Interests Option</Button>

                    <FormGroup>
                        <Label for='experience'>Experience</Label>
                        <Input type='textarea' name='experience' />
                    </FormGroup>
                    <Button>Add Experience Option</Button>

                    <FormGroup>
                        <Label for='openQuestionField'>Open Question Field</Label>
                        <Input type='textarea' name='openQuestionField' />
                    </FormGroup>
                    <Button>Add an Open Question Field</Button>
                </Form>
            </div>
        );
    }
}

ProfileForms.propTypes = {};

export default ProfileForms;
