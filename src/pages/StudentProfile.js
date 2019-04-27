import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row
} from 'reactstrap';

class StudentProfile extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        address: "",
        zipCode: "",
        github: "",
        linkedIn: ""
    }

    render() {
        return (
            <div className="StudentProfile">
                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={this.state.firstName}

                                />
                            </FormGroup>
                        </Col>
                        
                        <Col md={6}>
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={this.state.lastName}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={this.state.address}
                                />
                            </FormGroup>
                        </Col>
                            
                        <Col md={6}>
                            <FormGroup>
                                <Label for="zipCode">Zip Code</Label>
                                <Input
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    value={this.state.zipCode}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="github">Github</Label>
                                <Input
                                    type="text"
                                    name="github"
                                    id="github"
                                    value={this.state.github}
                                />
                            </FormGroup>
                        </Col>
                            
                        <Col md={6}>
                            <FormGroup>
                                <Label for="linkedIn">linkedIn</Label>
                                <Input
                                    type="text"
                                    name="linkedIn"
                                    id="linkedIn"
                                    value={this.state.linkedIn}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    {/* <FormGroup row>
                        <Label for="checkbox" sm={2}>Checkbox</Label>
                        <Col sm={{ size: 10 }}> */}
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Check me out
                                </Label>
                            </FormGroup>
                        {/* </Col>
                    </FormGroup> */}
                </Form>
            </div>
        );
    }
}

export default StudentProfile;