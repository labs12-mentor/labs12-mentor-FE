import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { updateUser, deleteMentor, getUsers, getMentors } from '../../../actions';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
// core components
import Table from "../../../material-components/Table/Table.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto",
    },
    table: {
      minWidth: 700,
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

class MentorApplications extends React.Component {
    state = {
        searchBarContents: '',
        users: [],
        mentors: []
    }

    async componentDidMount() {
        await this.props.getUsers();
        await this.props.getMentors();
        
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
            return mentor.role === "MENTEE" && mentor.mentor_deleted === false;
        });

        this.setState({
            users: this.props.users,
            mentors: existingMentorInfo,
        });
    }

    routeOnClick(id) {
        history.push(`/user/admin/mentor-application/${id}`);
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
        let filteredUsers = this.state.mentors.filter((mentor) => {
            return (
                mentor.last_name.toLowerCase().includes(searchInput) ||
                mentor.first_name.toLowerCase().includes(searchInput) ||
                mentor.email.toLowerCase().includes(searchInput)
            );
        });

        return filteredUsers;
    };

    clickHandler = async (e, mentor, status) => {
        e.preventDefault();
        const clickedUser = this.props.users.filter(user => {
            return user.id == mentor.id;
        })[0];
        
        if(status === "approved"){
            clickedUser.role = "MENTOR";
            await this.props.updateUser(clickedUser.id, { ...clickedUser });
            await this.props.getUsers();

        } else if(status === "denied") {
            await this.props.deleteMentor(mentor.mentor_id);
            await this.props.getMentors();
        }

        const existingMentorInfo = this.props.mentors.map(mentor => {
            const alteredUser = this.props.users.filter(user => {                
                return user.id === mentor.user_id;
            })[0];

            alteredUser.status = mentor.status;
            alteredUser.mentor_id = mentor.id;
            alteredUser.mentor_deleted = mentor.deleted;
            return alteredUser;
        }).filter(mentor => {
            return mentor.role === "MENTEE" && mentor.mentor_deleted === false;
        });

        this.setState({
            ...this.state,
            mentors: existingMentorInfo
        });
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.mentors);
        return (
            <Paper className={classes.root}>
                <Input
                    placeholder="Search Mentor Applications"
                    className={classes.input}
                    name='searchBarContents'
                    value={this.state.searchBarContents}
                    onChange={this.changeHandler}
                    inputProps={{ 'aria-label': 'Description', }}
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
                                    <Button justIcon size="sm" color={"info"} onClick={() => this.routeOnClick(mentor.mentor_id)}>
                                        <Person />
                                    </Button>,
                                    <Button justIcon size="sm" color={"success"} onClick={e => this.clickHandler(e, mentor, "approved")} >
                                        <Done />
                                    </Button>,
                                    <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, mentor, "denied")}>
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
    })(withStyles(styles)(MentorApplications));
