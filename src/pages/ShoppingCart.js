import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Clear from "@material-ui/icons/Clear";
// core components
import Table from "../material-components/Table/Table.jsx";
import Button from "../material-components/CustomButtons/Button.jsx";
import Card from "../material-components/Card/Card.jsx";
import CardBody from "../material-components/Card/CardBody.jsx";

import shoppingCartStyle from "../assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";

class ShoppingCartPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
        <Table
            tableData={[
            [
                <h3 className={classes.cardTitle}>first experience</h3>,
                <div className={classes.buttonGroup} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                    justIcon
                    color="info"
                    size="lg"
                    style={{ marginRight: 20 }}
                    >
                    <Edit style={{ fontSize: 30 }} />
                    </Button>
                    <Button
                    justIcon
                    color="info"
                    size="lg"
                    style={{ marginLeft: 20 }}
                    >
                    <Clear style={{ fontSize: 40 }} />
                    </Button>
                </div>
            ],
            [<span></span>,<span></span>]
            ]}
        />
    );
  }
}

export default withStyles(shoppingCartStyle)(ShoppingCartPage);