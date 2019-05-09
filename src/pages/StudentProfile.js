import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row,
    Card,
    CardBody,
    CardTitle
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

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler = e => {
        e.preventDefault();
        //add submit fxn to props and pass in state
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
                                    onChange={this.changeHandler}
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
                                    onChange={this.changeHandler}
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
                                    onChange={this.changeHandler}
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
                                    onChange={this.changeHandler}
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
                                    onChange={this.changeHandler}
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
                                    onChange={this.changeHandler}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Card>
                        <CardBody>
                            <CardTitle>Interests</CardTitle>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Check me out
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Check me out
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Check me out
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Check me out
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <Label for="addMore">Add More</Label>
                                <Input 
                                    type="text"
                                    name="addMore"
                                />
                            </FormGroup>

                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>Experience</CardTitle>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Software Development
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    UI/UX Design
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Engineering Management
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Product Development
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Executive Management
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    Quality Assurance Testing
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" />
                                    technology Educator
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <Label for="addMore">Other</Label>
                                <Input 
                                    type="text"
                                    name="addMore"
                                />
                            </FormGroup>

                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>I would like to be mentored so I can</CardTitle>

                            <FormGroup check>
                                <Input 
                                    type="textarea"
                                    name="mentorshipJustification"
                                />
                            </FormGroup>

                        </CardBody>
                    </Card>
                    
                </Form>
            </div>
        );
    }
}

export default StudentProfile;