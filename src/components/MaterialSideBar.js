import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { theme } from '../themes.js';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "../material-components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function MaterialSideBar(props) {
  const { classes } = props;

  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Your match
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="info" size="sm" component={RouterLink} to="/user/mentorprofile">View Profile</Button>
        </CardActions>
      </Card>
  );
}

MaterialSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialSideBar);
