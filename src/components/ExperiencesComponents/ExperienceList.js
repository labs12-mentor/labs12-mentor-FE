import React from "react";
import { connect } from "react-redux";
import {
  getExperiences,
  getSpecificExperience,
  updateExperience
} from "../../actions";
import ExperienceForm from "./ExperienceForm";
import ExeperienceCard from "./ExperienceCard";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";


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

    const nonDeleted = this.props.experiences.filter(experience => {
      return experience.deleted === false && this.props.userId === experience.user_id;
    });
    console.log(nonDeleted);
    return (
      <Card>
        <Button
          variant="contained"
          color="primary"
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

        {this.state.isLoaded ? (
          <Card className={classes.card}>
            <CardContent>
              {nonDeleted.map(experience => {
                return (
                  <ExeperienceCard
                    id={experience.id}
                    key={experience.id}
                    name={experience.name}
                  />
                );
              })}
            </CardContent>
          </Card>
        ) : (
          <h2>Loading</h2>
        )}
        
      </Card>
      
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
