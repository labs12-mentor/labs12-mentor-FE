import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateUser, getCurrentUser } from "../../actions";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../material-components/CustomButtons/Button.jsx";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { FormGroup } from "@material-ui/core";
import { theme } from "../../themes.js";
import { MuiThemeProvider } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%"
  },
  main: {
    // width: '100%',
    // display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
    // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    //     width: 400,
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    // },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class UserProfileForm extends React.Component {
  state = {
    id: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    role: "",
    github_id: "",
    github_token: "",
    organization_id: "",
    deleted: false
  };

  async componentDidMount() {
    await this.props.getCurrentUser();
    this.setState({
      ...this.state,
      id: this.props.user.id,
      email: this.props.user.email,
      password: this.props.user.password,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      street: this.props.user.street,
      city: this.props.user.city,
      state: this.props.user.state,
      zipcode: this.props.user.zipcode,
      country: this.props.user.country,
      role: this.props.user.role,
      github_id: this.props.user.github_id,
      github_token: this.props.user.github_token,
      organization_id: this.props.user.organization_id
    });
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  updateUser = e => {
    e.preventDefault();
    this.props.updateUser(this.state.id, this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <main className={classes.main} style={{ width: "50%" }}>
          <CssBaseline />
          <Paper elevation={1} className={classes.paper}>
            <Typography component="h1" variant="h5">
              Update Your Info
            </Typography>
            <form className={classes.form} onSubmit={this.updateUser}>
              <FormGroup row>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>{this.state.email}</InputLabel>
                  <Input
                    type="text"
                    name="email"
                    placeholder="New email"
                    onChange={this.handleChanges}
                  />
                </FormControl>
              </FormGroup>
              <FormGroup row>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>{this.state.first_name}</InputLabel>
                  <Input
                    type="text"
                    name="first_name"
                    placeholder="New First Name"
                    onChange={this.handleChanges}
                  />
                </FormControl>
              </FormGroup>
              <FormGroup row>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>{this.state.last_name}</InputLabel>
                  <Input
                    type="text"
                    name="last_name"
                    placeholder="New Last Name"
                    onChange={this.handleChanges}
                  />
                </FormControl>
              </FormGroup>
              <FormGroup row>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>{this.state.street}</InputLabel>
                  <Input
                    type="text"
                    name="street"
                    placeholder="street"
                    onChange={this.handleChanges}
                  />
                </FormControl>
              </FormGroup>
              <FormGroup row>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>{this.state.city}</InputLabel>
                  <Input
                    type="text"
                    name="city"
                    placeholder="New city"
                    onChange={this.handleChanges}
                  />
                </FormControl>
              </FormGroup>
              <FormGroup row>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>{this.state.state}</InputLabel>
                  <Input
                    type="text"
                    name="state"
                    placeholder="New state"
                    onChange={this.handleChanges}
                  />
                </FormControl>
              </FormGroup>
              <FormGroup row>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>{this.state.zipcode}</InputLabel>
                  <Input
                    type="text"
                    name="zipcode"
                    placeholder="New zipcode"
                    onChange={this.handleChanges}
                  />
                </FormControl>
              </FormGroup>
              <FormGroup row>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>{this.state.country}</InputLabel>
                  <Input
                    type="text"
                    name="country"
                    placeholder="New country"
                    onChange={this.handleChanges}
                  />
                </FormControl>
              </FormGroup>

              <Button
                type="submit"
                variant="contained"
                color="info"
                className={classes.submit}
                onClick={this.updateUser}
              >
                Update
              </Button>
            </form>
          </Paper>
        </main>
      </MuiThemeProvider>
    );
  }
}

UserProfileForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  };
};

const mapDispatchToProps = {
  updateUser,
  getCurrentUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserProfileForm));
