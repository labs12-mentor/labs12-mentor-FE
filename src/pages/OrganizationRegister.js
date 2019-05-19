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
import Icon from '@material-ui/core/Icon';
import EmailIcon from '@material-ui/icons/Markunread';
import PasswordIcon from '@material-ui/icons/Lock';
import AccountBox from '@material-ui/icons/AccountBox';
import Face from '@material-ui/icons/Face';
import Link from '@material-ui/icons/Link';
import Group from '@material-ui/icons/Group';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { theme } from '../themes.js';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { registerOrganization } from '../actions';
import { FormGroup } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        width: '100%'
    },
    button: {
      marginRight: theme.spacing.unit,
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
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
    form: {// Fix IE 11 issue.
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    formDiv: {
        width: '100%',
        padding: '3%',
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

function getSteps() {
    return ['Register an Organization', 'Register Organization Owner', 'Invite new members'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown step';
    }
  }

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
            user_last_name: '',
            activeStep: 0,
            skipped: new Set(),
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

    isStepOptional = step => step === 1;

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <main className={classes.main}>
                <CssBaseline />
                <Paper elevation={1} className={classes.paper}>
                    {/* <Typography component="h1" variant="h5">
                        Register Organization
                    </Typography> */}
                    <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            // if (this.isStepOptional(index)) {
            //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
            // }
            // if (this.isStepSkipped(index)) {
            //   props.completed = false;
            // }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>

                    <form className={classes.form} onSubmit={this.handleSubmit}>
                    <div className={classes.formDiv}>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='organization_name'><Group /> Organization Name</InputLabel>
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
                                <InputLabel htmlFor='organization_description'><Group /> Organization Description</InputLabel>
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
                                <InputLabel >
                                    Organization Logo (upload a .png or .jpg)
                                </InputLabel>
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
                                <InputLabel htmlFor='programUrl'><Link /> https://mentormatch.com/</InputLabel>
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

                        </div>

                        <div className={classes.formDiv} >
                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_email'><EmailIcon />  Email</InputLabel>
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
                                <InputLabel htmlFor='user_password'><PasswordIcon /> Password</InputLabel>
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
                                <InputLabel htmlFor='user_first_name'><Face /> First name</InputLabel>
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
                                <InputLabel htmlFor='user_last_name'><Face /> Last name</InputLabel>
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
                        </div>
                        </form>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleSubmit}
                            >
                            Launch Program
                        </Button>

                    
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
