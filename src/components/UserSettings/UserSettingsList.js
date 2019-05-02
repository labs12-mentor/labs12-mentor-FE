import React from "react";
import { connect } from "react-redux";
import { getUserSettings } from "../../actions/UserSettingsActions.js";
import UserSettingsCard from "./UserSettingsCard.js";

class UserSettingsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserSettings();
  }

  render() {
    return (
      <div>Meetings
        <h1>Your Meetings</h1>
        {this.props.UserSettingsList.map(meeting => {
          return <MeetingCard />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    UserSettingsist: state.UserSettingsReducer.meetingsUserSettingsList
  };
}

export default connect(
  mapStateToProps,
  { getUserSettings }
)(UserSettingsList);
