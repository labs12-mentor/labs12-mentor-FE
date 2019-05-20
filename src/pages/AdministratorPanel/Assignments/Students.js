import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
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

import { deleteMatch } from '../../../actions';

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


    routeToAssignments(id) {
        // history.push(`/user/admin/mentorassignment/${id}/mentee`);
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

    render() {
        const { classes } = this.props;

        const fillButtons = [
            { color: "info", icon: Person },
            { color: "success", icon: Edit },
            { color: "danger", icon: Close }
          ].map((prop, key) => {
            return (
              <Button justIcon size="sm" color={prop.color} key={key}>
                <prop.icon />
              </Button>
            );
          });

        return (
            <Paper className={classes.root}>
                {/* <InputBase className={classes.input} placeholder="Search Matches by Student" /> */}
                    <Input
                        placeholder="Search Matches by Student"
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
                    "",
                    "Mentee Name",
                    "Mentee Email",
                    "Mentor Name",
                    ""
                    ]}
                    tableData={this.filterBySearch('mentee').map(match => (
                        [
                            <IconButton 
                                style={{color: 'black'}} 
                                className={classes.iconButton}
                            > 
                                <LinkIcon /> 
                            </IconButton>,
                            `${match.mentee.first_name} ${match.mentee.last_name}`,
                            match.mentee.email,
                            `${match.mentor.first_name} ${match.mentor.last_name}`,                             
                            [
                                <Button justIcon size="sm" color={"info"} >
                                    <Person />
                                </Button>,
                                <Button justIcon size="sm" color={"danger"} >
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

                {/* <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        {/* <TableCell>Mentee ID</TableCell> */}
                        {/* <TableCell align="left">Mentee Name</TableCell>
                        <TableCell align="left">Mentee Email</TableCell>
                        <TableCell align="left">Mentor Name</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.filterBySearch('mentee').map(match => (
                        <TableRow key={match.id}>
                            {/* <TableCell component="th" scope="row">
                                {match.mentee.id}
                            </TableCell> */}
                            {/* <TableCell align="left">{match.mentee.first_name + " " + match.mentee.last_name}</TableCell>
                            <TableCell align="left">{match.mentee.email}</TableCell>
                            <TableCell align="left">{match.mentor.first_name + " " + match.mentor.last_name}</TableCell>
                            <TableCell align="left">
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteForeverIcon color='primary' className={classes.DeleteForever} onClick={e => this.deleteMatch(e, match.id)} />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody> */}
                {/* </Table> */}
            </Paper>
        );
    }
}

// StudentAssignList.propTypes = {};

export default connect(null, { deleteMatch })(withStyles(styles)(StudentAssignments));
