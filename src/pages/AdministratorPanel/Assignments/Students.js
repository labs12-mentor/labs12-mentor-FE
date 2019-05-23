import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { createMatch, deleteMatch, getMentees, getMatches, getMentors, getUsers, updateMentee } from '../../../actions';
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Table from "../../../material-components/Table/Table.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";
import Paper from "@material-ui/core/Paper";
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Person from "@material-ui/icons/Person";
import Close from "@material-ui/icons/Close";
import SearchIcon from '@material-ui/icons/Search';

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
    iconButton: {
        padding: 10,   
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


class StudentAssignments extends React.Component {
    state = {
        mentees: [],
        mentors: [],
        users: [],
        matches: [],
        matchInfo: [],
        searchBarContents: ''
    }

    async componentDidMount() {
        await this.props.getUsers();
        await this.props.getMentors();
        await this.props.getMentees();
        await this.props.getMatches();

        const matchUserInfo = this.props.matches.map(match => {
            let userInfo = {
                id: match.id,
                mentee: {},
                mentor: {},
                deleted: false
            };
            userInfo.deleted = match.deleted;

            let menteeId = this.props.mentees.filter(mentee => {
                return mentee.id === match.mentee_id;
            })[0].user_id;

            userInfo.mentee = this.props.users.filter(user => {
                return user.id === menteeId;
            })[0];

            let mentorId = this.props.mentors.filter(mentor => {
                return mentor.id === match.mentor_id;
            })[0].user_id;
            
            userInfo.mentor = this.props.users.filter(user => {
                return user.id === mentorId;
            })[0];

            return userInfo;
        }).filter(match => {
            return match.deleted === false;
        });

        this.setState({
            ...this.state,
            users: this.props.users,
            matches: this.props.matches,
            mentees: this.props.mentees,
            mentors: this.props.mentors,
            matchInfo: matchUserInfo
        });
    }


    routeOnClick(id, match) {
        history.push(`/user/admin/match/${id}`);        
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
        let filteredMatches = this.state.matchInfo.filter(match => {
            return (
                match.mentee.first_name.toLowerCase().includes(searchInput) ||
                match.mentee.last_name.toLowerCase().includes(searchInput) ||
                match.mentee.email.toLowerCase().includes(searchInput) ||
                match.mentor.first_name.toLowerCase().includes(searchInput) ||
                match.mentor.last_name.toLowerCase().includes(searchInput) ||
                match.mentor.email.toLowerCase().includes(searchInput)
            );
        });

        return filteredMatches;
    };

    clickHandler = async (e, match) => {
        e.preventDefault();
        await this.props.deleteMatch(match.id);
        await this.props.getMatches();

        const matchUserInfo = this.props.matches.map(match => {
            let userInfo = {
                id: match.id,
                mentee: {},
                mentor: {},
                deleted: false
            };
            userInfo.deleted = match.deleted;

            let menteeId = this.props.mentees.filter(mentee => {
                return mentee.id === match.mentee_id;
            })[0].user_id;

            userInfo.mentee = this.props.users.filter(user => {
                return user.id === menteeId;
            })[0];

            let mentorId = this.props.mentors.filter(mentor => {
                return mentor.id === match.mentor_id;
            })[0].user_id;

            userInfo.mentor = this.props.users.filter(user => {
                return user.id === mentorId;
            })[0];

            return userInfo;
        }).filter(match => {
            return match.deleted === false;
        });

        this.setState({
            ...this.state,
            users: this.props.users,
            matches: this.props.matches,
            mentees: this.props.mentees,
            mentors: this.props.mentors,
            matchInfo: matchUserInfo
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                    <Input
                        placeholder="Search Match Assignments"
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
                        "Mentee Name",
                        "Mentee Email",
                        "Mentor Name",
                        "Mentor Email",
                        "",
                    ]}
                    tableData={this.filterBySearch().map((match, index)=> {
                        return (
                            [
                                ' ',
                                `${match.mentee.first_name} ${match.mentee.last_name}`,
                                `${match.mentee.email}`,
                                `${match.mentor.first_name} ${match.mentor.last_name}`,
                                `${match.mentor.email}`,
                                [
                                    <Button justIcon size="sm" color={"info"} onClick={() => this.routeOnClick(match.id, match)} >
                                        <Person />
                                    </Button>,
                                    <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, match)} >
                                        <Close />
                                    </Button>
                                ]
                            ]
                        )
                    })}
                    customCellClasses={[
                    classes.textCenter,
                    classes.textRight,
                    classes.textRight
                    ]}
                    customClassesForCells={[0, 4, 5]}
                    customHeadCellClasses={[
                    classes.textCenter,
                    classes.textRight,
                    classes.textRight
                    ]}
                    customHeadClassesForCells={[0, 4, 5]}
                />
            </Paper>
        );
    }
}

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
        deleteMatch,
        getMatches,
        getMentees,
        getMentors,
        getUsers,
        updateMentee
    })(withStyles(styles)(StudentAssignments));
