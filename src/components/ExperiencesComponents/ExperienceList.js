import React from "react";
import { connect } from "react-redux";
import {
  getExperiences,
  getSpecificExperience,
  updateExperience
} from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ExperienceForm from './ExperienceForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Clear from "@material-ui/icons/Clear";
// core components
import Table from "../../material-components/Table/Table.jsx";
import Button from "../../material-components/CustomButtons/Button.jsx";

const styles = theme => ({
  // root: {
  //     flexGrow: 1,
  // },
  // demo: {
  //     backgroundColor: theme.palette.background.paper,
  // },
  // title: {
  //     margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  // },
  card: {
    minWidth: 275,
    maxHeight: 500,
    overflow: "auto"
  },
  button: {
    margin: theme.spacing.unit
  }
});

class ExperienceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      open: false
    };
  }

  async componentDidMount() {
    await this.props.getExperiences();
    this.setState({ isLoaded: true });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { isLoaded } = this.state;

    const nonDeleted = this.props.experiences.filter(experience => {
      return experience.deleted === false && this.props.userId === experience.user_id;
    });
    
    return (
      <div style={{ width: '100%' }}>
        <Button
          variant="contained"
          color="info"
          onClick={this.handleClickOpen}
          className={classes.button}
        >
          Create New Experience
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <ExperienceForm canEdit={false} userId={this.props.userId} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Table
          tableData={nonDeleted.map(experience => {
            return ([
                <p className={classes.cardTitle}>{experience.name}</p>,
                <div className={classes.buttonGroup} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    justIcon
                    color="info"
                    size="sm"
                    style={{ marginLeft: 30, marginRight: 10 }}
                  >
                    <Edit style={{ fontSize: 30 }} />
                  </Button>
                  <Button
                    justIcon
                    color="info"
                    size="sm"
                    style={{ marginLeft: 10 }}
                  >
                    <Clear style={{ fontSize: 40 }} />
                  </Button>
                </div>
            ])
          })}
        />
      </div>
      // <Card>
      //   <Button
      //     variant="contained"
      //     color="primary"
      //     onClick={this.handleClickOpen}
      //     className={classes.button}
      //   >
      //     Create New Experience
      //   </Button>
      //   <Dialog
      //     open={this.state.open}
      //     onClose={this.handleClose}
      //     aria-labelledby="form-dialog-title"
      //   >
      //     <DialogContent>
      //       <ExperienceForm canEdit={false} userId={this.props.userId} />
      //     </DialogContent>
      //     <DialogActions>
      //       <Button onClick={this.handleClose} color="primary">
      //         Cancel
      //       </Button>
      //     </DialogActions>
      //   </Dialog>

      //   {this.state.isLoaded ? (
      //     <Card className={classes.card}>
      //       <CardContent>
      //         {nonDeleted.map(experience => {
      //           return (
      //             <ExeperienceCard
      //               id={experience.id}
      //               key={experience.id}
      //               name={experience.name}
      //             />
      //           );
      //         })}
      //       </CardContent>
      //     </Card>
      //   ) : (
      //     <h2>Loading</h2>
      //   )}
        
      // </Card>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    experiences: state.experiences.experiences
  };
}

export default connect(
  mapStateToProps,
  { getExperiences, updateExperience, getSpecificExperience }
)(withStyles(styles)(ExperienceList));
