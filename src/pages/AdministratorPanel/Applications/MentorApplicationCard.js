import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    }
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
                <TableCell component="th" scope="row">
                    {mentor.id}
                </TableCell>
                <TableCell align="right">{mentor.last_name}</TableCell>
                <TableCell align="right">{mentor.first_name}</TableCell>
                <TableCell align="right">{mentor.email}</TableCell>
                <TableCell align="right">{"undecided"}</TableCell>
            </TableRow>
        );
    }
}

export default withStyles(styles)(MentorApplicationCard);