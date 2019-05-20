import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "../../material-components/CustomButtons/Button.jsx";

import modalStyle from "../../assets/jss/material-kit-pro-react/modalStyle"
//assets/jss/material-kit-pro-react/modalStyle.jsx";

import UserGuide from "./UserGuide";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ExampleLiveDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liveDemo: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="primary"
          onClick={() => this.handleClickOpen("liveDemo")}
        >
          Launch Demo Modal
        </Button>
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal,
            // maxWidth: "md"
          }}
          open={this.state.liveDemo}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("liveDemo")}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              simple
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              onClick={() => this.handleClose("liveDemo")}
            >
              {" "}
              <Close className={classes.modalClose} />
            </Button>
            <h4 className={classes.modalTitle}>Get Started!</h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
          {/* <h1>Hey</h1> */}
          <UserGuide/>
          </DialogContent>
          {/* <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => this.handleClose("liveDemo")}
              color="secondary"
            >
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(ExampleLiveDemo);