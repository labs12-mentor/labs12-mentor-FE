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
        matches: [],
        searchBarContents: ''
    }

    async componentDidMount() {
        await this.props.getUsers();
        await this.props.getMentors();
        await this.props.getMentees();
        await this.props.getMatches();
        
        const existingMenteeInfo = this.props.mentees.map(mentee => {
            const alteredUser = this.props.users.filter(user => {                
                return user.id === mentee.user_id;
            })[0];
            
            alteredUser.status = mentee.status;
            alteredUser.wanted_mentor_id = mentee.wanted_mentor_id;
            alteredUser.mentee_id = mentee.id;
            alteredUser.mentee_deleted = mentee.deleted;
            return alteredUser;
        }).filter(mentee => {
            return mentee.status === "AVAILABLE" && mentee.mentee_deleted === false;
        });

        this.setState({
            ...this.state,
            users: this.props.users,
            matches: this.props.matches,
            mentees: existingMenteeInfo,
            mentors: this.props.mentors
        });
    }

    routeOnClick(id) {
        history.push(`/user/admin/mentorassignment/${id}`)
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
        let filteredUsers = this.state.mentees.filter((mentee) => {
            return (
                mentee.last_name.toLowerCase().includes(searchInput) ||
                mentee.first_name.toLowerCase().includes(searchInput) ||
                mentee.email.toLowerCase().includes(searchInput)
            );
        });

        return filteredUsers;
    };

    clickHandler = async (e, mentorId, mentee, status) => {
        e.preventDefault();

        if(status === "approved"){
            await this.props.createMatch({
                mentor_id: mentorId,
                mentee_id: mentee.mentee_id,
                deleted: false,
            });
            await this.props.getMentees();
        } else if(status === "denied") {
            await this.props.deleteMentee(mentee.mentee_id);
            await this.props.getMentees();
        }

        const existingMenteeInfo = this.props.mentees.map(mentee => {
            const alteredUser = this.props.users.filter(user => {                
                return user.id === mentee.user_id;
            })[0];
            
            alteredUser.status = mentee.status;
            alteredUser.wanted_mentor_id = mentee.wanted_mentor_id;
            alteredUser.mentee_id = mentee.id;
            alteredUser.mentee_deleted = mentee.deleted;
            return alteredUser;
        }).filter(mentee => {
            return mentee.status === "AVAILABLE" && mentee.mentee_deleted === false;
        });

        this.setState({
            ...this.state,
            mentees: existingMenteeInfo
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
                    tableData={this.filterBySearch().map((mentee, index)=> {
                        return (
                            [
                                ' ',
                                mentee.last_name, 
                                mentee.first_name,
                                mentee.email,
                                this.props.users.filter(user => {return user.id === mentee.wanted_mentor_id}).map(user => {return user.first_name + " " + user.last_name}),
                                [
                                    <Button justIcon size="sm" color={"info"} onClick={() => this.routeOnClick(mentee.id)} >
                                        <Person />
                                    </Button>,
                                    <Button justIcon size="sm" color={"success"} onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee, "approved")} >
                                        <Done />
                                    </Button>,
                                    <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee, "denied")} >
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
