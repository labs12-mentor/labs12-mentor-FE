import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "../../../../material-components/CustomButtons/Button.jsx";


const styles = {
    card: {
      margin: '0 auto',
      minWidth: 200,
      width: '50%'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    applicationItem:{
        marginTop: 20
    },
    applicationItemAnswer: {
        marginLeft: 4
    }
  };


class ApplicationRes extends React.Component {
    render() {        
        const { classes } = this.props;

        return (
                
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    Application Details
                </Typography>

                <Typography variant="h5" component="h2" className={classes.applicationItem}>
                    Start Date
                </Typography>
                <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                    05/20/2019
                </Typography>

                <Typography variant="h5" component="h2" className={classes.applicationItem}>
                    Days Available
                </Typography>
                <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                    Monday-Friday
                </Typography>

                <Typography variant="h5" component="h2" className={classes.applicationItem}>
                    Time Available
                </Typography>
                <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                    8am-5pm
                </Typography>

                <Typography variant="h5" component="h2" className={classes.applicationItem}>
                    Location
                </Typography>
                <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                    57891
                </Typography>

                <Typography variant="h5" component="h2" className={classes.applicationItem}>
                    Why Do You Want To Be A Mentor?
                </Typography>
                <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                It's so important to do something every day that will make you happy. Nice 
                little fluffy clouds laying around in the sky being lazy. We want to use a lot 
                pressure while using no pressure at all. We don't make mistakes we just have happy little accidents.
                </Typography>
            </CardContent>
            <CardActions>
                    <Button color="success" size="sm" >Approve</Button>
                    <Button color="danger" size="sm" >Deny</Button>
            </CardActions>
        </Card>
        );
    }
}

ApplicationRes.propTypes = {};

export default withStyles(styles)(ApplicationRes);
