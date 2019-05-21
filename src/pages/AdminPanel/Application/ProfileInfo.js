import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "../../../material-components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
      minWidth: 200,
      width: '50%'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    email:{
        marginTop: '200'
    },
    address: {
        margin: '20 0'
    }
  };

class ProfileInfo extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}
                    </Typography>

                    <Typography variant="h6" component="h2" className={classes.email}>
                        {`${this.props.currentUser.email}`}
                    </Typography>

                    <Typography variant="h6" component="h2" className={classes.address}>
                        {`${this.props.currentUser.street}, ${this.props.currentUser.city},`}
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.address}>
                        {`${this.props.currentUser.state}, ${this.props.currentUser.zipcode}, ${this.props.currentUser.country}`}
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

ProfileInfo.propTypes = {
    currentUser: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileInfo);
