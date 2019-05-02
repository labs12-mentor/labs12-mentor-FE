import React from "react";
import UserSettingsForm from "../components/UserSettings/UserSettingsForm";
import UserSettingsCard from "../components/UserSettings/UserSettingsCard"

const UserSettingsContainer = props => {
  return (
      <div>
      <UserSettingsCard/>
      <UserSettingsForm/>
      </div>
  )
    
};

export default UserSettingsContainer;
