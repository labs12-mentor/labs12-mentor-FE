import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
// core components
import GridContainer from "../material-components/Grid/GridContainer.jsx";
import GridItem from "../material-components/Grid/GridItem.jsx";
import Button from "../material-components/CustomButtons/Button.jsx";
import Card from "../material-components/Card/Card.jsx";
import CardBody from "../material-components/Card/CardBody.jsx";
import InfoArea from "../material-components/InfoArea/InfoArea.jsx";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FormGroup } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Markunread';
import PasswordIcon from '@material-ui/icons/Lock';
import Link from '@material-ui/icons/Link';

import signupPageStyle from '../assets/jss/material-kit-pro-react/views/signUpPageStyle.jsx';
// import image from "../assets/img/bg7.jpg";
import image from '../assets/img/sergio-souza-1318950-unsplash.jpg';

import { registerUser, getSpecificInvitation, getSpecificOrganization } from '../actions';

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
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
    console.log(this.state);
      e.preventDefault();
      this.props.registerOrganization(
          {
            ...this.state,
            organization_id: this.props.invitation.organization_id,
            role: this.props.invitation.role
          }
      );
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    await this.props.getSpecificInvitation(this.props.match.params.id);
    await this.props.getSpecificOrganization(this.props.invitation.organization_id);
  }

  render() {
    const { classes, ...rest } = this.props;
    
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Join {this.props.organization.name} as a {this.props.invitation.role}</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={5} md={5}>
                        <InfoArea
                          className={classes.infoArea}
                          title="Create Groups that Resonate"
                          description="Launch an organization to bring together people who want to connect and learn."
                          icon={Timeline}
                          iconColor="rose"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Connect People"
                          description="Experienced individuals have the opportunity to apply for mentorship. Users can then apply to be mentored by these experienced individuals."
                          icon={Code}
                          iconColor="primary"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Build and Inspire Individuals"
                          description="Create a space where teaching and learning flow naturally."
                          icon={Group}
                          iconColor="info"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <form className={classes.form} onSubmit={this.handleSubmit}>
                        
                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='first_name'><Group /> First name</InputLabel>
                                <Input
                                    type='text'
                                    name='first_name'
                                    id='first_name'
                                    placeholder='Enter your first name'
                                    value={this.first_name}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='last_name'><Group /> Last name</InputLabel>
                                <Input
                                    type='text'
                                    name='last_name'
                                    id='last_name'
                                    placeholder='Enter your last name'
                                    value={this.last_name}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='email'><Group /> Email</InputLabel>
                                <Input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter your email'
                                    value={this.email}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='password'><Group /> Password</InputLabel>
                                <Input
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='Enter your password'
                                    value={this.password}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        </form>
                        <Button
                                type="submit"
                                variant="contained"
                                color="info"
                                className={classes.submit}
                                onClick={this.handleSubmit}
                            >
                            Join {this.props.organization.name}
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

UserRegistration.propTypes = {
  classes: PropTypes.object.isRequired,
  invitation: PropTypes.object.isRequired,
  organization: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        invitation: state.invitations.currentInvitation
            ? state.invitations.currentInvitation
            : { organization_id: -1, role: 'USER' },
        organization: state.organizations.currentOrganization
            ? state.organizations.currentOrganization
            : { name: '' }
    };
};

const mapDispatchToProps = {
  registerUser,
  getSpecificInvitation,
  getSpecificOrganization
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(signupPageStyle)(UserRegistration));