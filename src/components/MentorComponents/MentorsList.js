import React from "react";
import { connect } from "react-redux";
import { getMentors, createMentee, getUsers, getCurrentUser } from "../../actions";
import MentorCard from "./MentorCard.js";
import MentorForm from "./MentorForm.js";
import { Button, Modal, ModalBody } from "reactstrap";


import Table from "../../material-components/Table/Table.jsx";
import PersonAdd from "@material-ui/icons/PersonAdd";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

class MentorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoading: false,
      selectedUser: null
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  async componentDidMount() {
    await this.props.getCurrentUser();
    await this.props.getMentors();
    await this.props.getUsers();
    this.setState({ isLoading: true });
  }

  apply = (e, mentorId) => {
    e.preventDefault();
    this.props.createMentee({
      user_id: this.props.user.id,
      wanted_mentor_id: this.props.mentorId,
      deleted: false
    });
  };

  render() {
    const { classes } = this.props;
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );

    const mentorUserInfo = this.props.mentors.map(mentor => {
      return this.props.users.filter(user => {
        return user.id === mentor.user_id;
      })[0];
    });

    if (this.state.applied === true) {
      return <h2>You have applied</h2>;
    } else {
      return (
        <div>
          <h1>You Can Only Apply To One Mentor</h1>
          <Button
            variant="contained" 
            color="info" 
            onClick={this.toggle}
            className={classes.button}
          >
            Become a Mentor
          </Button>

          {this.state.isLoading ? (
            <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            external={externalCloseBtn}
          >
            <ModalBody>
              <MentorForm 
              userId={this.props.user.id}
              />
            </ModalBody>
          </Modal>

          
                <Table
                  tableData={mentorUserInfo.map((mentor, index) => {
                    return ([
                        <p className={classes.cardTitle}>{`${mentor.first_name} ${mentor.last_name}`}</p>,
                        <div className={classes.buttonGroup} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <Button
                            //justicon
                            color="info"
                            size="sm"
                            style={{ marginLeft: 30, marginRight: 10 }}
                            onClick={e => { this.apply(e,mentor.id); }}
                          >
                            <PersonAdd style={{ fontSize: 25 }} />
                          </Button>
                        </div>
                    ])
                  })}
                />
                </div>
          ) : (
            <h3>Loading</h3>
          )}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    mentors: state.mentors.mentors,
    users: state.users.users,
    user: state.auth.currentUser
  };
}

export default connect(
  mapStateToProps,
  { getMentors, createMentee, getUsers, getCurrentUser }
)(withStyles(styles)(MentorsList));
