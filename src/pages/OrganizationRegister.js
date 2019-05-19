import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import { theme } from '../themes.js';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { registerOrganization } from '../actions';
import { FormGroup } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        width: '100%'
    },
    main: {
        // width: 'auto',
        // display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        //     width: 400,
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        // },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
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
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <main className={classes.main}>
                <CssBaseline />
                <Paper elevation={1} className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Create a new Mentorship Program
                    </Typography>

                    <form className={classes.form} onSubmit={this.handleSubmit}>
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
                                <p>Logo - please upload a .png or .jpg for your desired logo image
                                (optional).</p>
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

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleSubmit}
                            >
                            Launch Program
                        </Button>
                    </form>
                </Paper>
                </main>
            </MuiThemeProvider>
        );
    }
}

OrganizationRegister.propTypes = {
    classes: PropTypes.object.isRequired,
};

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
