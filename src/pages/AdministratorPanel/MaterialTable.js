import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
// core components
import Table from "../../material-components/Table/Table.jsx";
import Button from "../../material-components/CustomButtons/Button.jsx";

import style from "../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

function Tables(props){
    const { classes } = props;
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
    const simpleButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button simple justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      );
    });
    const roundButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button round justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      );
    });
    return (
          <Table
            tableHead={[
              "#",
              "Name",
              "Job Position",
              "Since",
              "Salary",
              "Actions"
            ]}
            tableData={[
              ["1", "Andrew Mike", "Develop", "2013", "€ 99,225", fillButtons],
              ["2", "John Doe", "Design", "2012", "€ 89,241", roundButtons],
              ["3", "Alex Mike", "Design", "2010", "€ 92,144", simpleButtons]
            ]}
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
    );
}

export default withStyles(style)(Tables);