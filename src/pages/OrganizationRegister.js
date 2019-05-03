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
import { createOrganization } from '../actions/organizationActions';

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
        this.props.createOrganization(this.state);
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
                                value={this.programName}
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
                                value={this.programDescription}
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
                            value={this.programUrl}
                            onChange={this.handleInputs}
                        />
                            <FormText color="muted">
                                Please upload a .png or .jpg for your desired logo image.
                            </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="ownerEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input 
                                type="email" 
                                name="ownerEmail" 
                                id="ownerEmail"
                                value={this.ownerEmail}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="ownerPassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input 
                                type="password" 
                                name="ownerPassword" 
                                id="ownerPassword"
                                value={this.ownerPassword}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="firstName" sm={2}>First Name</Label>
                        <Col sm={10}>
                            <Input 
                                type="text" 
                                name="ownerFirstName" 
                                id="ownerFirstName"
                                value={this.ownerFirstName}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="lastName" sm={2}>Last Name</Label>
                        <Col sm={10}>
                            <Input 
                                type="text" 
                                name="ownerLastName" 
                                id="ownerLastName"
                                value={this.ownerLastName}
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

export default connect(null, { createOrganization })(OrganizationRegister);