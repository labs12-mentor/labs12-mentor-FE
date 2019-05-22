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
import GridContainer from "../material-components/Grid/GridContainer.jsx";
import GridItem from "../material-components/Grid/GridItem.jsx";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    minWidth: 200,
    alignItems: "center",
    justify: "center"
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
    <Grid
    container
    //spacing={0}
  
    alignItems="center"
    aligntext="center"
    justify="center"
    
    
  >
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
      </Grid>
  );
}

MaterialSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialSideBar);
