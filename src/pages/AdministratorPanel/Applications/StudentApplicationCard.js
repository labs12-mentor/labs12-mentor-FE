import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';

import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircle from '@material-ui/icons/CheckCircle';

import { createMatch } from '../../../actions';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    },
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class StudentApplicationCard extends React.Component {
    state = {
        approve: false,
        deny: false
    };

    routeToApplication(id) {
        // history.push(`/user/admin/mentorapplication/${id}`);
    }

    clickHandler = (e, mentorId, menteeId, status) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: true
        });
        if(status === "approved"){
            this.props.createMatch({
                mentor_id: mentorId,
                mentee_id: menteeId,
                deleted: false,
                status: status
            });
            //create a match
            //remove that mentor from the available mentors
            
            // this.props.evaluateMatch(e, mentorId, menteeId);
        }
    }

    render() {
        const { classes } = this.props;
        const { mentee } = this.props;
        return (

            <TableRow >
                {/* <TableCell component="th" scope="row">
                {mentee.id}
                </TableCell> */}
                <TableCell align="left">{mentee.last_name}</TableCell>
                <TableCell align="left">{mentee.first_name}</TableCell>
                <TableCell align="left">{mentee.email}</TableCell>
                <TableCell align="left">
                    {this.props.users.filter(user => {
                        return user.id === mentee.wanted_mentor_id
                    }).map(user => {
                        return user.first_name + " " + user.last_name;
                    })}
                </TableCell>
                <TableCell>                    
                    {/* <Button 
                        variant="contained" 
                        size="small" 
                        color="primary" 
                        className={classes.margin}
                        onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id, "approved")}
                    >
                        Approve
                    </Button>
                    <Button 
                        variant="outlined" 
                        size="small" 
                        color="primary" 
                        className={classes.margin}
                        onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id, "denied")} 
                    >
                        Deny
                    </Button> */}
                    <IconButton>
                        <CheckCircle color='primary' onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id, "approved")} />
                    </IconButton>
                    <IconButton>
                    <DeleteForeverIcon color='primary' onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id, "denied")} />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    }
}

// GetMentorApplication.propTypes = {
//     mentee: PropTypes.object.isRequired
// };

export default connect(
    null,
    { createMatch }
)(withStyles(styles)(StudentApplicationCard));
