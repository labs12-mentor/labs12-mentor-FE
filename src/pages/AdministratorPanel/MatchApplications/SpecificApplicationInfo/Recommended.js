import React from 'react';
import { connect } from 'react-redux';
import { deleteMentee, createMatch } from '../../../../actions';
import history from '../../../../history';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from "../../../../material-components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';
import temp from "../../../../assets/img/1024px-No_image_available.png.png"


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
    deleteHandler = async (e) => {
        e.preventDefault();
        
        await this.props.deleteMentee(this.props.potentialMatch.id);
        history.goBack();
    }

    approveHandler = async (e) => {
        e.preventDefault();

        await this.props.createMatch({
            mentor_id: this.props.potentialMatch.wanted_mentor_id,
            mentee_id: this.props.potentialMatch.id,
            status: "AVAILABLE"
        });
        history.goBack();
    }

    render() {
        const { classes } = this.props;
        const {mentor, mentee} = this.props.potentialMatch;
        console.log('potential match', this.props.potentialMatch);
        return (
            <div className={classes.main}>
            <Typography variant="h4" component="h2">
                Potential Match
            </Typography>
            <br></br>
            {mentor && mentee &&
            <div className={classes.enclosingDiv}>            
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>
                        Mentor Details
                    </Typography>
                    <br></br>
                    <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                    {`${mentor.first_name} ${mentor.last_name}`}
                    </Typography>

                    <div style={{display: 'flex'}}>
                        <div>
                            <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                                {`${mentor.email}`}
                            </Typography>

                            <div className={classes.address}>
                                <Typography variant="h6" component="h2" >
                                    {`${mentor.street}, ${mentor.city},`}
                                </Typography>
                        
                                <Typography variant="h6" component="h2">
                                    {`${mentor.state}, ${mentor.zipcode}, ${mentor.country}`}
                                </Typography>
                            </div>
                        </div>
                    <div style={{ marginLeft: "auto" }}>
                        <img src={temp} alt="placeholder" height="150px" width="150px" />
                    </div>

                    </div>
                </CardContent>
            </Card>
            
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>
                        Mentee Details
                    </Typography>
                            <br></br>

                    <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                    {`${mentee.first_name} ${mentee.last_name}`}
                    </Typography>

                    <div style={{display: 'flex'}}>
                        <div>
                            <Typography variant="h6" component="h2" className={classes.applicationItemAnswer}>
                                {`${mentee.email}`}
                            </Typography>
                            <div className={classes.address}>
                                <Typography variant="h6" component="h2" >
                                    {`${mentee.street}, ${mentee.city},`}
                                </Typography>
                        
                                <Typography variant="h6" component="h2">
                                    {`${mentee.state}, ${mentee.zipcode}, ${mentee.country}`}
                                </Typography>
                            </div>
                        </div>
                        <div style={{ marginLeft: "auto" }}>
                            <img src={temp} alt="placeholder" height="150px" width="150px" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            </div>            
            }

                {mentor && 
                mentee && 
                (
                <div>
                <br></br>
                    <Button 
                    className={classes.btn} 
                    color="success" 
                    size="lg" 
                    onClick={e => this.approveHandler(e)}
                >Approve</Button>
                <Button 
                    className={classes.btn} 
                    color="danger" 
                    size="lg" 
                    onClick={e => this.deleteHandler(e)}
                >Deny</Button>
                </div>
                )}
            </div>
        );
    }
}

export default connect(null, { deleteMentee, createMatch })(withStyles(styles)(Recommended));
