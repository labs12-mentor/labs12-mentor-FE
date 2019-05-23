import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';

import { deleteMatch } from '../../../actions';
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Table from "../../../material-components/Table/Table.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";

import LinkIcon from '@material-ui/icons/Link';
import Paper from "@material-ui/core/Paper";
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Tooltip from '@material-ui/core/Tooltip';

import style from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Done from '@material-ui/icons/Done';
import Close from "@material-ui/icons/Close";

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
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
        searchBarContents: ''
    }


    routeOnClick(id) {
        history.push(`/user/admin/mentorassignment/${id}/mentee`);
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

    clickHandler = (e, match) => {
        e.preventDefault();
        
        this.props.deleteMatch(match.id);
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
                    "",
                    "Mentee Name",
                    "Mentee Email",
                    "Mentor Name",
                    ""
                    ]}
                    tableData={this.filterBySearch('mentee').map(match => (
                        [
                            ' ',
                            `${match.mentee.first_name} ${match.mentee.last_name}`,
                            match.mentee.email,
                            `${match.mentor.first_name} ${match.mentor.last_name}`,                             
                            [
                                <Button justIcon size="sm" color={"info"} onClick={() => this.routeOnClick(match.mentee.id)} >
                                    <Person />
                                </Button>,
                                <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, match)} >
                                    <Close />
                                </Button>
                            ]
                        ]
                    ))}
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

// StudentAssignList.propTypes = {};

export default connect(null, { deleteMatch })(withStyles(styles)(StudentAssignments));
