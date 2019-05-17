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
import Input from '@material-ui/core/Input';

import StudentApplicationCard from './StudentApplicationCard';

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
        flex: 1,
        marginLeft: '30%',
        width: '28%'
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
  
class StudentApplications extends React.Component {
    state = {
        mentees: [],
        mentors: [],
        searchBarContents: ''
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            mentees: this.props.mentees,
            mentors: this.props.mentors
        });
    }

    routeToApplication(id) {
        // history.push(`/user/admin/mentorapplication/${id}`);
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    filterBySearch = (role) => {
        const searchInput = this.state.searchBarContents.toLowerCase();
        let filteredUsers = [];

        if (role === 'mentee') {
            filteredUsers = this.props.mentees.filter((mentee) => {
                return (
                    mentee.last_name.toLowerCase().includes(searchInput) ||
                    mentee.first_name.toLowerCase().includes(searchInput) ||
                    mentee.email.toLowerCase().includes(searchInput)
                );
            });
        } else if (role === 'mentor') {
            filteredUsers = this.props.mentors.filter((mentor) => {
                return (
                    mentor.last_name.toLowerCase().includes(searchInput) ||
                    mentor.first_name.toLowerCase().includes(searchInput) ||
                    mentor.email.toLowerCase().includes(searchInput)
                );
            });
        }

        return filteredUsers;
    };

    render() {
        let menteeApplications = [];
        this.filterBySearch("mentee").forEach(mentee => {
            this.state.mentors.forEach(mentor => {
                if(mentee.wanted_mentor_id === mentor.mentor_id && mentor.status === "AVAILABLE"){
                    menteeApplications.push(mentee);
                }
            });
        });
        
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>

                {/* <InputBase className={classes.input} placeholder="Search Student Applications" /> */}
                <Input
                    placeholder="Search Student Applications"
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
                        <TableCell>Mentee ID</TableCell>
                            <TableCell align="left">Last Name</TableCell>
                            <TableCell align="left">First Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Desired Mentor</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menteeApplications.map((mentee, index) => {
                            return ( <StudentApplicationCard key={index} 
                                        mentee={mentee} 
                                        users={this.props.users} 
                                        evaluateMatch={this.evaluateMatch}
                                    /> )
                        })}
                </TableBody>
            </Table>
        </Paper>
        );
    }
}

StudentApplications.propTypes = {
    mentees: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
};

export default withStyles(styles)(StudentApplications);
