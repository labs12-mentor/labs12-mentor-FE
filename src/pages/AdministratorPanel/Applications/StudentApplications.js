import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { createMatch, deleteMentee } from '../../../actions';
import { withStyles } from "@material-ui/core/styles"
import Table from "../../../material-components/Table/Table.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Done from "@material-ui/icons/Done";
import Paper from "@material-ui/core/Paper";
import LinkIcon from '@material-ui/icons/Link';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

import style from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

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

    clickHandler = (e, mentorId, menteeId, status) => {
        e.preventDefault();
        if(status === "approved"){
            this.props.createMatch({
                mentor_id: mentorId,
                mentee_id: menteeId,
                deleted: false,
            });
        } else if(status === "denied") {
            this.props.deleteMentee(menteeId);
        }
    }

    render() {
        const { classes } = this.props;
        const fillButtons = [
          { color: "info", icon: Person },
          { color: "success", icon: Edit },
          { color: "danger", icon: Close }
        ].map((prop, key) => {
          return (
            <Button justIcon size="sm" color={"danger"} >
                <Close />
            </Button>
          );
        });

        let menteeApplications = [];
        this.filterBySearch("mentee").forEach(mentee => {
            this.state.mentors.forEach(mentor => {
                if(!mentee.deleted && mentee.wanted_mentor_id === mentor.mentor_id && mentor.status === "AVAILABLE"){
                    menteeApplications.push(mentee);
                }
            });
        });
        console.log(menteeApplications);

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

                <Table
                    tableHead={[
                    " ",
                    "Last Name",
                    "First Name",
                    "Email",
                    "Desired Mentor",
                    "",
                    ]}
                    tableData={menteeApplications.map((mentee, index)=> {
                        return (
                            [
                            // <IconButton style={{color: 'black'}} className={classes.iconButton}> <LinkIcon /> </IconButton>, 
                            ' ',
                            mentee.last_name, 
                            mentee.first_name,
                            mentee.email,
                            this.props.users.filter(user => {return user.id === mentee.wanted_mentor_id}).map(user => {return user.first_name + " " + user.last_name}),
                            [
                                <Button justIcon size="sm" color={"info"} >
                                    <Person />
                                </Button>,
                                <Button justIcon size="sm" color={"success"} onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id, "approved")} >
                                    <Done />
                                </Button>,
                                <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id, "denied")} >
                                    <Close />
                                </Button>
                            ]
                        ]
                        )
                    })}
                />

                {/* <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {/* <TableCell>Mentee ID</TableCell> */}
                            {/* <TableCell align="left">Last Name</TableCell>
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
            </Table> */}
        </Paper>
        );
    }
}

StudentApplications.propTypes = {
    mentees: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
};

export default connect(null, { createMatch, deleteMentee })(withStyles(styles)(StudentApplications));
