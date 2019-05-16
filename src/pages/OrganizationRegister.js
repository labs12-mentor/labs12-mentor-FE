import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import { theme } from '../themes';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { registerOrganization } from '../actions';
import { FormGroup } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        width: '100%'
    },
    paper: {
        width: '80%',
        background: 'black'
    }
});

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
            <MuiThemeProvider theme={theme}>
                <Paper elevation={1}>
                    <h1>Create a new Mentorship Program</h1>

                    <form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='organization_name'>
                                    Organization Name
                                </InputLabel>
                                <Input
                                    type='text'
                                    name='organization_name'
                                    id='organization_name'
                                    placeholder='Enter a program name'
                                    value={this.organization_name}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='organization_description'>
                                    Organization Description
                                </InputLabel>
                                <Input
                                    type='text'
                                    name='organization_description'
                                    id='organization_description'
                                    placeholder='Enter a program description'
                                    value={this.organization_description}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' fullWidth>
                                Logo - please upload a .png or .jpg for your desired logo image
                                (optional).
                                <Input
                                    accept='image/*'
                                    type='file'
                                    name='logoFile'
                                    id='logoFile'
                                    value={this.organization_logo}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='programUrl'>
                                    https://mentormatch.com/
                                </InputLabel>
                                <Input
                                    type='text'
                                    name='programUrl'
                                    id='programUrl'
                                    placeholder='Enter a program url'
                                    value={this.programUrl}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_email'>Email</InputLabel>
                                <Input
                                    type='email'
                                    name='user_email'
                                    id='user_email'
                                    placeholder='Enter the user email'
                                    value={this.user_email}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_password'>Password</InputLabel>
                                <Input
                                    type='password'
                                    name='user_password'
                                    id='user_password'
                                    placeholder='Enter the user password'
                                    value={this.user_password}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' fullWidth>
                                <InputLabel htmlFor='user_first_name'>First name</InputLabel>
                                <Input
                                    type='text'
                                    name='user_first_name'
                                    id='user_first_name'
                                    placeholder='Enter the user first name'
                                    value={this.user_first_name}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' fullWidth>
                                <InputLabel htmlFor='user_last_name'>Last name</InputLabel>
                                <Input
                                    type='text'
                                    name='user_last_name'
                                    id='user_last_name'
                                    placeholder='Enter the user last name'
                                    value={this.user_last_name}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <Button variant='contained' type='submit'>
                            Launch Program
                        </Button>
                    </form>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

OrganizationRegister.propTypes = {};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    registerOrganization
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(OrganizationRegister));
