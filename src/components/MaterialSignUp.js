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
import AttachFile from "@material-ui/icons/AttachFile";
import CloudUpload from "@material-ui/icons/CloudUpload";
// core components
import GridContainer from "../material-components/Grid/GridContainer.jsx";
import GridItem from "../material-components/Grid/GridItem.jsx";
import Button from "../material-components/CustomButtons/Button.jsx";
import Card from "../material-components/Card/Card.jsx";
import CardBody from "../material-components/Card/CardBody.jsx";
import InfoArea from "../material-components/InfoArea/InfoArea.jsx";
import FileInput from "../material-components/CustomFileInput/CustomFileInput.jsx";
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

import { registerOrganization, uploadLogo, fetchCurrentFile } from '../actions';

class OrganizationRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organization_name: '',
      organization_description: '',
      organization_logo: null,
      programUrl: '',
      user_email: '',
      user_password: '',
      user_first_name: '',
      user_last_name: '',
      // checked: [1]
    };
    // this.handleToggle = this.handleToggle.bind(this);
  }

  handleInputs = (e) => {
    e.preventDefault();
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });
  };

  handleSubmit = async(e) => {
      e.preventDefault();
      return await this.props.registerOrganization({
        ...this.state,
        organization_logo: this.props.logo
      });
  };


  // handleToggle(value) {
  //   const { checked } = this.state;
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   this.setState({
  //     checked: newChecked
  //   });
  // }

  handleFile = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      organization_logo: e.target.files[0]
    });
  }

  uploadFile = () => {
    const formData = new FormData();
    formData.append('logo', this.state.organization_logo);
    this.props.uploadLogo(formData);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        {/* <Header
          absolute
          color="transparent"
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="rose" />}
          {...rest}
        /> */}
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
                  <h2 className={classes.cardTitle}>Register</h2>
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
                                <InputLabel htmlFor='organization_name'><Group /> Organization Name</InputLabel>
                                <Input
                                    type='text'
                                    name='organization_name'
                                    id='organization_name'
                                    placeholder='Enter a program name'
                                    value={this.state.organization_name}
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
                                    value={this.state.organization_description}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                {/* <InputLabel htmlFor='organization_logo'><Group /> Organization Logo</InputLabel> */}
                                <FileInput
                                    type='file'
                                    name='organization_logo'
                                    id='organization_logo'
                                    valueFile={this.state.organization_logo}
                                    value={this.state.organization_logo}
                                    handleFile={this.handleFile}
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      placeholder: "Upload a program logo..."
                                    }}
                                    endButton={{
                                      uploadFile: this.uploadFile,
                                      buttonProps: {
                                        round: true,
                                        color: "info",
                                        justIcon: true,
                                        fileButton: true
                                      },
                                      icon: <CloudUpload />
                                    }}
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
                                    value={this.state.programUrl}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>
                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_email'><EmailIcon />  Email</InputLabel>
                                <Input
                                    type='email'
                                    name='user_email'
                                    id='user_email'
                                    placeholder='Enter the user email'
                                    value={this.state.user_email}
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
                                    value={this.state.user_password}
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
                                    value={this.state.user_first_name}
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
                                    value={this.state.user_last_name}
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
                                disabled={this.props.logo === null || this.props.logo === undefined}
                            >
                            Launch Program
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

OrganizationRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    logo: state.files.currentFile
  };
};

const mapDispatchToProps = {
  registerOrganization,
  uploadLogo,
  fetchCurrentFile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(signupPageStyle)(OrganizationRegister));