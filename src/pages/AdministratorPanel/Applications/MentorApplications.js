import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import MentorApplicationCard from './MentorApplicationCard';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,   
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
  });

class MentorApplications extends React.Component {
    routeToApplication(id) {
        // history.push(`/user/admin/mentorapplication/${id}`);
    }

    render() {
        const { classes } = this.props;
        let mentorApplications = [];

        return (
            <Paper className={classes.root}>
                <InputBase className={classes.input} placeholder="Search Mentor Applications" />
                  <IconButton className={classes.iconButton} aria-label="Search">
                      <SearchIcon />
                  </IconButton>
                <Divider className={classes.divider} />

                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Mentor ID</TableCell>
                        <TableCell align="left">Last Name</TableCell>
                        <TableCell align="left">First Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                    </TableHead>

                    <TableBody>
                    {this.props.mentors.map((mentor, index)=> (
                        <MentorApplicationCard key={index} mentor={mentor} />
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

MentorApplications.propTypes = {
    mentors: PropTypes.array.isRequired
};

export default withStyles(styles)(MentorApplications);
