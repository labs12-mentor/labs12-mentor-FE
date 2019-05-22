import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../../../material-components/Grid/GridContainer.jsx";
import GridItem from "../../../material-components/Grid/GridItem.jsx";
import CustomInput from "../../../material-components/CustomInput/CustomInputContactForm.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";

import workStyle from "../../../assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";
import { connect } from 'react-redux';
import { sendEmailViaContactForm } from '../../../actions';

class SectionWork extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      mailBody: ''
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  async sendEmail(e){
    e.preventDefault();
    await this.props.sendEmailViaContactForm({
      ...this.state,
      mailBody: this.state.mailBody.replace(/(?:\r\n|\r|\n)/g, '<br/>')
    });
    return await this.setState({
      ...this.state,
      name: '',
      email: '',
      mailBody: ''
    })
  }

  async handleInput(e){
    e.preventDefault();
    return await this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>Contact us</h2>
            <h4 className={classes.description}>
              If you have any questions about how MentorMatch works, drop us a message!
            </h4>
            <form onSubmit={this.sendEmail}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    name="name"
                    handleInput={this.handleInput}
                    value={this.state.name}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    name="email"
                    handleInput={this.handleInput}
                    value={this.state.email}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                  name="mailBody"
                  handleInput={this.handleInput}
                  value={this.state.mailBody}
                />
                <GridItem
                  xs={12}
                  sm={4}
                  md={4}
                  className={`${classes.mrAuto} ${classes.mlAuto}`}
                >
                  <Button color="info" type="submit">Send Message</Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  sendEmailViaContactForm
}

export default withStyles(workStyle)(connect(mapStateToProps, mapDispatchToProps)(SectionWork));
