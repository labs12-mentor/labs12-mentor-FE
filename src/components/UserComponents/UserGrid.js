import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import CustomTable from "./CustomTable.js";

const styles = theme => ({
  root: {
    flexGrow: 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const UserGrid = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>First Name</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>Last Name</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>GitHub</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>Linkedin</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
        <Typography>
        City
      </Typography>
        </Paper>
      </Grid>
      <CustomTable/>
      </Grid>
    </div>
  );
};

UserGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserGrid);
