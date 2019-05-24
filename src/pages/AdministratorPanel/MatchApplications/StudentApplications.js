import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { createMatch, deleteMentee, getMentees, getMatches, getMentors, getUsers, updateMentee } from '../../../actions';
import { withStyles } from "@material-ui/core/styles"
import Table from "../../../material-components/Table/Table.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Close from "@material-ui/icons/Close";
import Done from "@material-ui/icons/Done";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

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
        users: [],
        potentialMatches: [],
        searchBarContents: ''
    }

    async componentDidMount() {
        await this.props.getUsers();
        await this.props.getMentors();
        await this.props.getMentees();
        await this.props.getMatches();
        
        const existingMentees = this.props.mentees.filter(mentee => {
            return mentee.status === "AVAILABLE" && mentee.deleted === false;
        });

        let potentialMatchInfo = existingMentees.map(mentee => {
            let matchUserInfo = {
                id: mentee.id,
                mentee: {},
                mentor: {},
                deleted: mentee.deleted,
                wanted_mentor_id: mentee.wanted_mentor_id
            };

            matchUserInfo.mentee = this.props.users.filter(user => {
                return user.id === mentee.user_id;
            })[0];
            
            const mentorUserId = this.props.mentors.filter(mentor => {
                return mentor.id === mentee.wanted_mentor_id;
            })[0].user_id;

            matchUserInfo.mentor = this.props.users.filter(user => {
                return mentorUserId === user.id;
            })[0];

            return matchUserInfo;
        });

        this.setState({
            ...this.state,
            users: this.props.users,
            potentialMatches: potentialMatchInfo,
            mentees: existingMentees,
            mentors: this.props.mentors
        });
    }

    routeOnClick(id) {
        history.push(`/user/admin/match-application/${id}`);
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    filterBySearch = () => {
        const searchInput = this.state.searchBarContents.toLowerCase();
        let filteredUsers = this.state.potentialMatches.filter(match => {
            return (
                match.mentee.last_name.toLowerCase().includes(searchInput) ||
                match.mentee.first_name.toLowerCase().includes(searchInput) ||
                match.mentee.email.toLowerCase().includes(searchInput)
            );
        });

        return filteredUsers;
    };

    clickHandler = async (e, mentorId, menteeId, status, match) => {
        e.preventDefault();

        if(status === "approved"){
            await this.props.createMatch({
                mentor_id: mentorId,
                mentee_id: menteeId,
                status: "AVAILABLE"
            });
            await this.props.getMentees();
        } else if(status === "denied") {
            await this.props.deleteMentee(menteeId);
            await this.props.getMentees();
        }
        
        const existingMentees = this.props.mentees.filter(mentee => {
            return mentee.status === "AVAILABLE" && mentee.deleted === false;
        });

        let potentialMatchInfo = existingMentees.map(mentee => {
            let matchUserInfo = {
                id: mentee.id,
                mentee: {},
                mentor: {},
                deleted: mentee.deleted,
                wanted_mentor_id: mentee.wanted_mentor_id
            };

            matchUserInfo.mentee = this.props.users.filter(user => {
                return user.id === mentee.user_id;
            })[0];

            const mentorUserId = this.props.mentors.filter(mentor => {
                return mentor.id === mentee.wanted_mentor_id;
            })[0].user_id;

            matchUserInfo.mentor = this.props.users.filter(user => {
                return mentorUserId === user.id;
            })[0];

            return matchUserInfo;
        });

        this.setState({
            ...this.state,
            users: this.props.users,
            potentialMatches: potentialMatchInfo,
            mentees: this.props.mentees,
            mentors: this.props.mentors
        });

    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>

                <Input
                    placeholder="Search Student Applications"
                    className={classes.input}
                    name='searchBarContents'
                    value={this.state.searchBarContents}
                    onChange={this.changeHandler}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                    style={{
                        fontSize: '1.3rem',
                        width: '40%',
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
                    tableData={this.filterBySearch().map((match, index)=> {
                        return (
                            [
                                ' ',
                                match.mentee.last_name, 
                                match.mentee.first_name,
                                match.mentee.email,
                                `${match.mentor.first_name} ${match.mentor.last_name}`,
                                [
                                    <Button justIcon size="sm" color={"info"} onClick={() => this.routeOnClick(match.id)} >
                                        <Person />
                                    </Button>,
                                    <Button justIcon size="sm" color={"success"} onClick={e => this.clickHandler(e, match.wanted_mentor_id, match.id, "approved", match)} >
                                        <Done />
                                    </Button>,
                                    <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, match.wanted_mentor_id, match.id, "denied", match)} >
                                        <Close />
                                    </Button>
                                ]
                        ]
                        )
                    })}
                />
        </Paper>
        );
    }
}

StudentApplications.propTypes = {
    mentees: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
};

const mstp = state => {
    return {
        mentees: state.mentees.mentees,
        mentors: state.mentors.mentors,
        matches: state.matches.matches,
        users: state.users.users
    }
}

export default connect(
    mstp, 
    { 
        createMatch, 
        deleteMentee,
        getMatches,
        getMentees,
        getMentors,
        getUsers,
        updateMentee
    })(withStyles(styles)(StudentApplications));
