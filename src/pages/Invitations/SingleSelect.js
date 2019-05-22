import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// core components

import styles from "../../assets/jss/material-kit-pro-react/customSelectStyle.jsx";

class MultipleSelect extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: '',
    };
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.SelectedUserRole(event.target.value);
  };

  render(){
    const { classes } = this.props;
    return (
      <FormControl
        fullWidth
        className={classes.selectFormControl}>
        <InputLabel
          htmlFor="simple-select"
          className={classes.selectLabel}>
          Select User Role
        </InputLabel>
        <Select
          MenuProps={{
            className: classes.selectMenu
          }}
          classes={{
            select: classes.select
          }}
          value={this.state.simpleSelect}
          onChange={this.handleSimple}
          inputProps={{
            name: "simpleSelect",
            id: "simple-select"
          }}>
          <MenuItem
            disabled
            classes={{
              root: classes.selectMenuItem
            }}>
            Role
          </MenuItem>
          <MenuItem
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelected
            }}
            value="MENTEE">
            Mentee
          </MenuItem>
          <MenuItem
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelected
            }}
            value="MANAGER">
            Manager
          </MenuItem>
          <MenuItem
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelected
            }}
            value="OWNER">
            Owner
          </MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(MultipleSelect);