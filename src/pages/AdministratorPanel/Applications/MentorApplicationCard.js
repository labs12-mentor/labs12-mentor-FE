import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircle from '@material-ui/icons/CheckCircle';

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
  

class MentorApplicationCard extends React.Component {
    routeToApplication(id) {
        // history.push(`/user/admin/mentorapplication/${id}`);
    }

    render() {
        const { classes } = this.props;
        let { mentor } = this.props;
        let mentorApplications = [];

        return (
            <TableRow>
                {/* <TableCell component="th" scope="row">
                    {mentor.id}
                </TableCell> */}
                <TableCell align="left">{mentor.last_name}</TableCell>
                <TableCell align="left">{mentor.first_name}</TableCell>
                <TableCell align="left">{mentor.email}</TableCell>
                <TableCell align="left">
                    {/* <Button variant="contained" size="small" color="primary" className={classes.margin}>
                        Approve
                    </Button>
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                        Deny
                    </Button> */}
                    <IconButton>
                        <CheckCircle color='primary' />
                    </IconButton>
                    <IconButton>
                    <DeleteForeverIcon color='primary' />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    }
}

export default withStyles(styles)(MentorApplicationCard);