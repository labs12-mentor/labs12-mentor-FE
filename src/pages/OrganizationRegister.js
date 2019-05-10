import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, FormText, Label, Input, Button } from 'reactstrap';
import { registerOrganization } from '../actions';

class OrganizationRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            organization_name: '',
            organization_description: '',
            programUrl: '',
            user_email: '',
            user_password: '',
            user_first_name: '',
            user_last_name: ''
        };
    }

    handleInputs = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.registerOrganization(this.state);
    };

    render() {
        return (
            <div className='OrganizationRegister'>
                <h1>Create a new Mentorship Program</h1>

                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for='organization_name' sm={2}>
                            Organization Name
                        </Label>
                        <Col sm={10}>
                            <Input
                                type='text'
                                name='organization_name'
                                id='organization_name'
                                placeholder='Enter a Program name.'
                                value={this.organization_name}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='organization_description' sm={2}>
                            Organization Description
                        </Label>
                        <Col sm={10}>
                            <Input
                                type='textarea'
                                name='organization_description'
                                id='organization_description'
                                placeholder='Enter a Program Description.'
                                value={this.organization_description}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='logoFile' sm={2}>
                            Logo
                        </Label>
                        <Col sm={10}>
                            <Input type='file' name='logoFile' id='logoFile' />
                            <FormText color='muted'>
                                Please upload a .png or .jpg for your desired logo image.
                            </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='programUrl' sm={3}>
                            https://mentorprogram.co/
                        </Label>
                        <Col sm={9}>
                            <Input
                                type='text'
                                name='programUrl'
                                id='programUrl'
                                value={this.programUrl}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='user_email' sm={2}>
                            Email
                        </Label>
                        <Col sm={10}>
                            <Input
                                type='email'
                                name='user_email'
                                id='user_email'
                                value={this.user_email}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='user_password' sm={2}>
                            Password
                        </Label>
                        <Col sm={10}>
                            <Input
                                type='password'
                                name='user_password'
                                id='user_password'
                                value={this.user_password}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='user_first_name' sm={2}>
                            First Name
                        </Label>
                        <Col sm={10}>
                            <Input
                                type='text'
                                name='user_first_name'
                                id='user_first_name'
                                value={this.user_first_name}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='user_last_name' sm={2}>
                            Last Name
                        </Label>
                        <Col sm={10}>
                            <Input
                                type='text'
                                name='user_last_name'
                                id='user_last_name'
                                value={this.user_last_name}
                                onChange={this.handleInputs}
                            />
                        </Col>
                    </FormGroup>

                    <Button type='submit'>Launch Program</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    registerOrganization
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationRegister);
