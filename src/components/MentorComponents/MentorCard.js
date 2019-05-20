import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { getCurrentUser } from "../../actions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class MentorCard extends React.Component {
  state = {
    user: [],
    mentees: []
  };

  async componentDidMount() {
    await this.props.getCurrentUser();
  
    this.setState({ user: this.props.user });
    
  }

  apply = e => {
    e.preventDefault();
    this.props.createMentee({
      user_id: this.state.user.id,
      wanted_mentor_id: this.props.id,
      deleted: false
    });
  };

  render() {
    return (
      <ExpansionPanel>
      
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
          <h4>{`${this.props.mentor.first_name} ${this.props.mentor.last_name}`}</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Button
          onClick={e => {
            this.apply(e);
          }}
        >
          Apply to This Mentor
        </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const mstp = state => {
  return {
    user: state.auth.currentUser
  };
};

export default connect(
  mstp,
  { getCurrentUser }
)(MentorCard);
