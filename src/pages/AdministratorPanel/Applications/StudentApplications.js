import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// import GetMentorApplicationCard from './GetMentorApplicationCard';

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
  
class StudentApplications extends React.Component {
    state = {
        mentees: [],
        mentors: []
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            mentees: this.props.mentees,
            mentors: this.props.mentors
        });
    }

    routeToApplication(id) {
        // history.push(`/user/admin/mentorapplication/${id}`);
    }

    render() {
        // let menteeApplications = [];
        // this.state.mentees.forEach(mentee => {
        //     this.state.mentors.forEach(mentor => {
        //         if(mentee.wanted_mentor_id === mentor.mentor_id && mentor.status === "AVAILABLE"){
        //             menteeApplications.push(mentee);
        //         }
        //     });
        // });
        
        const { classes } = this.props;

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
        );
    }
}

// GetMentorApplication.propTypes = {
//     mentees: PropTypes.array.isRequired,
//     users: PropTypes.array.isRequired
// };

export default withStyles(styles)(StudentApplications);
