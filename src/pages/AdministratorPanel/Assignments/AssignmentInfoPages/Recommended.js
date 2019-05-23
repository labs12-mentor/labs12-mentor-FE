import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "../../../../material-components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';

const styles = {
    enclosingDiv: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    card: {
      margin: '0 auto',
      minWidth: 200,
      width: '45%'
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

class Recommended extends React.Component {
    render() {
        const { classes } = this.props;
        const mentor = this.props.mentorMatch;
        const mentee = this.props.menteeMatch;

        return (
            <div className={classes.enclosingDiv}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        Mentor Details
                    </Typography>

                    <Typography variant="h5" component="h2" className={classes.applicationItem}>
                        Name
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                    {`${mentor.first_name} ${mentor.last_name}`}
                    </Typography>

                    <Typography variant="h5" component="h2" className={classes.applicationItem}>
                        Email
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                        {`${mentor.email}`}
                    </Typography>

                    <Typography variant="h5" component="h2" className={classes.applicationItem}>
                        Address
                    </Typography>
                    <div className={classes.address}>
                        <Typography variant="h6" component="h2" >
                            {`${mentor.street}, ${mentor.city},`}
                        </Typography>
                
                        <Typography variant="h6" component="h2">
                            {`${mentor.state}, ${mentor.zipcode}, ${mentor.country}`}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                        <Button color="success" size="sm" >Approve</Button>
                        <Button color="danger" size="sm" >Deny</Button>
                </CardActions>
            </Card>
            
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        Mentee Details
                    </Typography>

                    <Typography variant="h5" component="h2" className={classes.applicationItem}>
                        Name
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                    {`${mentee.first_name} ${mentee.last_name}`}
                    </Typography>

                    <Typography variant="h5" component="h2" className={classes.applicationItem}>
                        Email
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                        {`${mentee.email}`}
                    </Typography>

                    <Typography variant="h5" component="h2" className={classes.applicationItem}>
                        Address
                    </Typography>
                    <div className={classes.address}>
                        <Typography variant="h6" component="h2" >
                            {`${mentee.street}, ${mentee.city},`}
                        </Typography>
                
                        <Typography variant="h6" component="h2">
                            {`${mentee.state}, ${mentee.zipcode}, ${mentee.country}`}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                        <Button color="success" size="sm" >Approve</Button>
                        <Button color="danger" size="sm" >Deny</Button>
                </CardActions>
            </Card>
            </div>
            // <div className='Recommended'>
            //     <Button>Mark as Bad Match</Button>
            //     <Button>Dismiss</Button>
            //     <Button>Assign</Button>

            //     {Object.keys(mentee).length === 0 ? (
            //         <div>
            //             <p>Name: {`${mentor.first_name} ${mentor.last_name}`}</p>
            //             <p>Email: {`${mentor.email}`}</p>
            //             <p>
            //                 Address:{' '}
            //                 {`${mentor.street}, ${mentor.city}, 
            //                 ${mentor.state}, ${mentor.zipcode} ${mentor.country}`}
            //             </p>
            //         </div>
            //     ) : (
            //         <div>
            //             <p>Name: {`${mentee.first_name} ${mentee.last_name}`}</p>
            //             <p>Email: {`${mentee.email}`}</p>
            //             <p>
            //                 Address:{' '}
            //                 {`${mentee.street}, ${mentee.city}, 
            //                 ${mentee.state}, ${mentee.zipcode} ${mentee.country}`}
            //             </p>
            //         </div>
            //     )}
            // </div>
        );
    }
}

Recommended.propTypes = {
    mentorMatch: PropTypes.object.isRequired,
    menteeMatch: PropTypes.object.isRequired
};

export default withStyles(styles)(Recommended);
