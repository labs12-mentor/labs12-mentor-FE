import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { getInvitations, getUsers, deleteInvitation } from '../../../actions';
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

class InvitationsList extends React.Component {
    state = {
        searchBarContents: '',
        invitations: [],
        users: []
    }

    async componentDidMount() {
        await this.props.getInvitations();
        await this.props.getUsers();

        let existingInvitations = this.props.invitations.filter(invite => {
            return invite.deleted === false;
        });

        let invites = existingInvitations.map(invite => {
            const invited_user = this.props.users.filter(user => {
                return user.id === invite.user_id;
            })[0];
            if(invited_user === undefined){
                invite.last_name = "";
                invite.first_name = "";
                invite.email = "";
            } else {
                invite.last_name = invited_user.last_name;
                invite.first_name = invited_user.first_name;
                invite.email = invited_user.email;
            }
            return invite;
        });

        this.setState({
            ...this.state,
            invitations: invites,
            users: this.props.users
        });
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
        let filteredInvites = [];
        
        filteredInvites = this.state.invitations.filter(invite => {
            return (
                invite.last_name.toLowerCase().includes(searchInput) ||
                invite.first_name.toLowerCase().includes(searchInput) ||
                invite.email.toLowerCase().includes(searchInput) ||
                invite.role.toLowerCase().includes(searchInput)
            );
        });        

        return filteredInvites;
    };

    clickHandler = async (e, id) => {
        e.preventDefault();

        await this.props.deleteInvitation(id)
            .then(async res => {
                await this.props.getInvitations();

                let existingInvitations = this.props.invitations.filter(invite => {
                    return invite.deleted === false;
                });

                let invites = existingInvitations.map(invite => {
                    const invited_user = this.props.users.filter(user => {
                        return user.id === invite.user_id;
                    })[0];
                    
                    invite.last_name = invited_user.last_name;
                    invite.first_name = invited_user.first_name;
                    invite.email = invited_user.email;

                    return invite;
                });

                this.setState({
                    ...this.state,
                    invitations: invites,
                });
            });
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Input
                    placeholder="Search Organization Invitations"
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
                    tableData={this.filterBySearch().map((invite, index)=> {
                        return (
                            [
                                ' ',
                                invite.last_name, 
                                invite.first_name, 
                                invite.email,
                                invite.role,
                                [
                                    // <Button justIcon size="sm" color={"info"}>
                                    //     <Person />
                                    // </Button>,
                                    // <Button justIcon size="sm" color={"success"}>
                                    //     <Done />
                                    // </Button>,
                                    <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, invite.id)}>
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
        invitations: state.invitations.invitations,
        users: state.users.users
    }
}

export default connect(mstp, { getInvitations, getUsers, deleteInvitation })(withStyles(styles)(InvitationsList));
