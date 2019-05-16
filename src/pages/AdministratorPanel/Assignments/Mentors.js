import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { deleteMatch } from '../../../actions';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    }
  });
  
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];

class MentorAssignments extends React.Component {
    routeToAssignments(id) {
        // history.push(`/user/admin/mentorassignment/${id}/mentor`);
    }

    deleteMatch = (e, matchId) => {
        e.preventDefault();
        this.props.deleteMatch(matchId);
    }

    render() {
        const { classes } = this.props;
        let mentorApplications = [];

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat (g)</TableCell>
                        <TableCell align="right">Carbs (g)</TableCell>
                        <TableCell align="right">Protein (g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
            // <Table striped>
            //     <thead>
            //         <tr>
            //             <th>Last Name</th>
            //             <th>First Name</th>
            //             <th>City</th>
            //             <th>Matched Student</th>
            //             <th></th>
            //         </tr>
            //     </thead>

            //     <tbody>
            //         {this.props.matchedUsers.map(match => {
            //             return <tr key={match.id} onClick={() => this.routeToAssignments(match.id)}>
            //                        <td>{match.mentor.last_name}</td>
            //                        <td>{match.mentor.first_name}</td>
            //                        <td>{match.mentor.email}</td>
            //                        <td>{match.mentee.first_name + " " + match.mentee.last_name}</td>
            //                        <td>
            //                            <Button 
            //                                 color="danger" 
            //                                 onClick={e => this.deleteMatch(e, match.id)}
            //                             >
            //                                 Delete
            //                             </Button>
            //                        </td>
            //                     </tr>
            //         })}
            //     </tbody>
            // </Table>
        );
    }
}

// MentorAssignList.propTypes = {
//     matchedUsers: PropTypes.array.isRequired
// };

export default connect(null, { deleteMatch })(withStyles(styles)(MentorAssignments));
