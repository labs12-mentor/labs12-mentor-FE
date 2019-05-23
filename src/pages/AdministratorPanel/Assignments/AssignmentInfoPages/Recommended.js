import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from "../../../../material-components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    enclosingDiv: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%'
    },
    btn: {
        maxWidth: 110,
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
    onClick = (e, status) => {
        // e.preventd
    }

    render() {
        const { classes } = this.props;
        const {mentor, mentee} = this.props.currentMatch;
        
        return (
            <div className={classes.main}>
            {mentor && mentee &&
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
            </Card>
            </div>            
            }

                <Button className={classes.btn} color="danger" size="lg" >Deny</Button>
            </div>
        );
    }
}

export default withStyles(styles)(Recommended);
