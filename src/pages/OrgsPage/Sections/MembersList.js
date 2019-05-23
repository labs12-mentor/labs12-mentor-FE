import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../../../actions';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
// material-ui icons
import Person from "@material-ui/icons/Person";
import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";
import SearchIcon from '@material-ui/icons/Search';
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

class MembersList extends React.Component {
    state = {
        searchBarContents: '',
        users: []
    }

    async componentDidMount() {
        await this.props.getUsers();

        let existingUsers = this.props.users.filter(user => {
            return user.deleted === false;
        });

        this.setState({
            users: existingUsers
        });
    }

    // routeOnClick(id) {
    //     history.push(`/user/admin/mentorapplication/${id}`);
    // }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    filterBySearch = () => {
        const searchInput = this.state.searchBarContents.toLowerCase();
        let filteredUsers = [];
        
        filteredUsers = this.state.users.filter(user => {
            return (
                user.last_name.toLowerCase().includes(searchInput) ||
                user.first_name.toLowerCase().includes(searchInput) ||
                user.email.toLowerCase().includes(searchInput) ||
                user.role.toLowerCase().includes(searchInput)
            );
        });        

        return filteredUsers;
    };

    clickHandler = async (e, id) => {
        e.preventDefault();
        await this.props.deleteUser(id)
        .then(async res => {
            await this.props.getUsers();

            let existingUsers = this.props.users.filter(user => {
                return user.deleted === false;
            });
    
            this.setState({
                users: existingUsers
            });
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Input
                    placeholder="Search Organization Members"
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
                    "Role",
                    "",
                    ]}
                    tableData={this.filterBySearch().map((user, index)=> {
                        return (
                            [
                                ' ',
                                user.last_name, 
                                user.first_name, 
                                user.email,
                                user.role,
                                [
                                    // <Button justIcon size="sm" color={"info"}>
                                    //     <Person />
                                    // </Button>,
                                    // <Button justIcon size="sm" color={"success"}>
                                    //     <Done />
                                    // </Button>,
                                    <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, user.id)}>
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

// MentorApplications.propTypes = {
//     mentors: PropTypes.array.isRequired
// };

const mstp = state => {
    return {
        users: state.users.users
    }
}

export default connect(mstp, { getUsers, deleteUser })(withStyles(styles)(MembersList));
