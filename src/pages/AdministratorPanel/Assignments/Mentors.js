import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Tooltip from '@material-ui/core/Tooltip';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';

import { deleteMatch } from '../../../actions';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    input: {
        flex: 1,
        marginLeft: '30%',
        width: '28%'
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
    DeleteForever: {
        fontSize: '30px',
    },
  });
  

class MentorAssignments extends React.Component {
    state = {
        searchBarContents: ''
    }

    routeToAssignments(id) {
        // history.push(`/user/admin/mentorassignment/${id}/mentor`);
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    deleteMatch = (e, matchId) => {
        e.preventDefault();
        this.props.deleteMatch(matchId);
    }

    filterBySearch = (role) => {
        const searchInput = this.state.searchBarContents.toLowerCase();
        const filteredMentees = this.props.matchedUsers.filter((match) => {
            return (
                match[role].last_name.toLowerCase().includes(searchInput) ||
                match[role].first_name.toLowerCase().includes(searchInput) ||
                match[role].email.toLowerCase().includes(searchInput)
            );
        });

        return filteredMentees;
    };

    render() {
        const { classes } = this.props;
        let mentorApplications = [];
        
        return (
            <Paper className={classes.root}>
                {/* <InputBase className={classes.input} placeholder="Search Matches by Mentor" /> */}
                    <Input
                        placeholder="Search Matches by Mentor"
                        className={classes.input}
                        name='searchBarContents'
                        value={this.state.searchBarContents}
                        onChange={this.changeHandler}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                  <IconButton className={classes.iconButton} aria-label="Search">
                      <SearchIcon />
                  </IconButton>

                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        {/* <TableCell>Mentor ID</TableCell> */}
                        <TableCell align="left">Mentor Name</TableCell>
                        <TableCell align="left">Mentor Email</TableCell>
                        <TableCell align="left">Student Name</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                    </TableHead>

                    <TableBody>
                    {this.filterBySearch('mentor').map(match => (
                        <TableRow key={match.id}>
                        {/* <TableCell component="th" scope="row">
                            {match.mentor.id}
                        </TableCell> */}
                        <TableCell align="left">{match.mentor.first_name + " " + match.mentor.last_name}</TableCell>
                        <TableCell align="left">{match.mentor.email}</TableCell>
                        <TableCell align="left">{match.mentee.first_name + " " + match.mentee.last_name}</TableCell>
                        <TableCell align="left">
                            <Tooltip title="Delete">
                                <IconButton>
                                    <DeleteForeverIcon color='primary' className={classes.DeleteForever} onClick={e => this.deleteMatch(e, match.id)} />
                                </IconButton>                            
                            </Tooltip>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

// MentorAssignList.propTypes = {
//     matchedUsers: PropTypes.array.isRequired
// };

export default connect(null, { deleteMatch })(withStyles(styles)(MentorAssignments));
