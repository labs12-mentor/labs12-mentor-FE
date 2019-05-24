import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../../../history';
import {
    updateUser,
    deleteMentor
} from '../../../../actions';
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
    email:{
        marginTop: 20
    },
    address: {
        marginTop: 20
    }
  };

class ProfileInfo extends React.Component {
    denyHandler = e => {
        e.preventDefault();
        this.props.deleteMentor(this.props.mentor.id);
        history.goBack();
    }

    approveHandler = e => {
        e.preventDefault();
        this.props.updateUser(this.props.mentor.user_id, { ...this.props.user, role: "MENTOR" });
        history.goBack();
    }

    render() {
        const { classes, user } = this.props;
        console.log(this.props.user);
        console.log(this.props.mentor);
        return (
            <Card className={classes.card}>
                {user &&
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {`${user.first_name} ${user.last_name}`}
                    </Typography>

                    <Typography variant="h6" component="h2" className={classes.email}>
                        {`${user.email}`}
                    </Typography>
                    <div className={classes.address}>
                        <Typography variant="h6" component="h2" >
                            {`${user.street}, ${user.city},`}
                        </Typography>
                
                        <Typography variant="h6" component="h2">
                            {`${user.state}, ${user.zipcode}, ${user.country}`}
                        </Typography>
                    </div>
                </CardContent>}

                <CardActions>
                    <Button color="success" size="sm" onClick={e => {this.approveHandler(e)}}>Approve</Button>
                    <Button color="danger" size="sm" onClick={e => {this.denyHandler(e)}}>Deny</Button>
                </CardActions>
            </Card>
        );
    }
}

ProfileInfo.propTypes = {
    currentUser: PropTypes.object.isRequired
};

export default connect(null, {updateUser, deleteMentor})(withStyles(styles)(ProfileInfo));
