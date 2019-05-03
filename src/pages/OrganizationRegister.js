import React from 'react';
import { connect } from 'react-redux';
import {
    Form,
    FormGroup,
    Col,
    FormText,
    Label,
    Input,
    Button
} from 'reactstrap';

class OrganizationRegister extends React.Component {
    state = {
        programName: "",
        programDescription: "",
        programUrl: "",
        ownerEmail: "",
        ownerPassword: "",
        ownerFirstName: "",
        ownerLastName: ""
    }

    handleInputs = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        //redux register function here
    }

    render() {
        return (
            <div className="OrganizationRegister">
                <h1>Create a new Mentorship Program</h1>

                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="programName" sm={2}>Program Name</Label>
                        <Col sm={10}>
                            <Input 
                                type="text" 
                                name="programName" 
                                id="programName" 
                                placeholder="Enter a Program name."
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="programDescription" sm={2}>Program Description</Label>
                        <Col sm={10}>
                            <Input 
                                type="textarea" 
                                name="programDescription" 
                                id="programDescription" 
                                placeholder="Enter a Program Description."
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="logoFile" sm={2}>Logo</Label>
                        <Col sm={10}>
                            <Input type="file" name="logoFile" id="logoFile" />
                            <FormText color="muted">
                                Please upload a .png or .jpg for your desired logo image.
                            </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="programUrl" sm={3}>https://mentorprogram.co/</Label>
                        <Col sm={9}>
                        <Input 
                            type="text" 
                            name="programUrl" 
                            id="programUrl" 
                            onChange={this.handleInputs}
                        />
                            <FormText color="muted">
                                Please upload a .png or .jpg for your desired logo image.
                            </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="ownerEmail" sm={2}>Owner Email</Label>
                        <Col sm={10}>
                            <Input 
                                type="text" 
                                name="ownerEmail" 
                                id="ownerEmail"
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <Button type="submit">Launch Program</Button>
                </Form>
            </div>
        );
    }
}

export default OrganizationRegister;