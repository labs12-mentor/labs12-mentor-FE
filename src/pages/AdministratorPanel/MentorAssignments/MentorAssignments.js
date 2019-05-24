import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { updateUser, deleteMentor, getUsers, getMentors } from '../../../actions';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Close from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
// core components
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import Table from "../../../material-components/Table/Table.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";


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
        searchBarContents: '',
        users: [],
        mentors: []
    }

    async componentDidMount() {
        await this.props.getUsers();
        await this.props.getMentors();
        console.log(this.props.mentors);
        //fetches all user data for the mentor application and filters out deleted mentor applications
        const existingMentorInfo = this.props.mentors.map(mentor => {
            const alteredUser = this.props.users.filter(user => {                
                return user.id === mentor.user_id;
            })[0];

            alteredUser.status = mentor.status;
            alteredUser.mentor_id = mentor.id;
            alteredUser.mentor_deleted = mentor.deleted;
            return alteredUser;
        }).filter(mentor => {
            return mentor.role === "MENTOR" && mentor.mentor_deleted === false;
        });

        this.setState({
            users: this.props.users,
            mentors: existingMentorInfo,
        });
    }

    routeOnClick(id) {
        history.push(`/user/admin/mentor-assignment/${id}`);
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

        const filteredMentors = this.state.mentors.filter(mentor => {
            return (
                mentor.last_name.toLowerCase().includes(searchInput) ||
                mentor.first_name.toLowerCase().includes(searchInput) ||
                mentor.email.toLowerCase().includes(searchInput)
            );
        });

        return filteredMentors;
    };

    clickHandler = async (e, mentor) => {
        e.preventDefault();

        await this.props.deleteMentor(mentor.mentor_id);
        await this.props.getMentors();

        const existingMentorInfo = this.props.mentors.map(mentor => {
            const alteredUser = this.props.users.filter(user => {                
                return user.id === mentor.user_id;
            })[0];

            alteredUser.status = mentor.status;
            alteredUser.mentor_id = mentor.id;
            alteredUser.mentor_deleted = mentor.deleted;
            return alteredUser;
        }).filter(mentor => {
            return mentor.role === "MENTOR" && mentor.mentor_deleted === false;
        });

        this.setState({
            ...this.state,
            mentors: existingMentorInfo
        });
    }

    render() {
        const { classes } = this.props;
          
        return (
            <Paper className={classes.root}>
                    <Input
                        placeholder="Search Mentor Assignments"
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
                    "",
                    ]}
                    tableData={this.filterBySearch().map((mentor, index)=> {
                        return (
                            [
                                ' ', 
                                mentor.last_name, 
                                mentor.first_name, 
                                mentor.email,                                  
                                [
                                    <Button justIcon size="sm" color={"info"} onClick={() => this.routeOnClick(mentor.mentor_id)} >
                                        <Person />
                                    </Button>,
                                    <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, mentor)}>
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

const mstp = state => {
    return {
        users: state.users.users,
        mentors: state.mentors.mentors
    }
}

export default connect(
    mstp, 
    { 
        updateUser, 
        deleteMentor,
        getUsers,
        getMentors
    })(withStyles(styles)(MentorAssignments));
