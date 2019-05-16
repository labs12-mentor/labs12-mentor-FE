import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from "react-redux";
import { updateUser, getCurrentUser } from "../../actions";

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

  updateUser = e => {
    e.preventDefault();
    this.props.updateUser(this.state.id, this.state);
  };

  render() {
    return (
    <React.Fragment>
      <form onSubmit={this.handleSubmit}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            name="email"
            fullWidth
            placeholder="New email"
            onChange={this.handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
             type="text"
             name="first_name"
             placeholder="New First Name"
             onChange={this.handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            name="last_name"
            placeholder="New Last Name"
            onChange={this.handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            name="street"
            placeholder="street"
            onChange={this.handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            name="city"
            placeholder="New city"
            onChange={this.handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
             type="text"
             name="state"
             placeholder="New state"
             onChange={this.handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            name="zipcode"
            placeholder="New zipcode"
            onChange={this.handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            name="country"
            placeholder="New country"
            onChange={this.handleChanges}
          />
        </Grid>

        <Grid item xs={12}>
        <Button onClick={this.updateUser}>Update</Button>
        </Grid>
      </Grid>
      </form>
    </React.Fragment>
  );
}


handleChanges = e => {
  this.setState({
    ...this.state,
    [e.target.name]: e.target.value
  });
};
}

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
)(UserProfileForm);
