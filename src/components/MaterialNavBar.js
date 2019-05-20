import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import NotificationButton from '../pages/NotificationButton';

import { theme } from '../themes.js';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    marginBottom: 30,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class MaterialNavbar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem component={RouterLink} to="/user/profile" onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem component={RouterLink} to="/organization" onClick={this.handleMenuClose}>Organization</MenuItem>
        <MenuItem component={RouterLink} to="/" onClick={()=> {this.props.logoutUser(); this.handleMenuClose()}}>Logout</MenuItem>
      </Menu>
    );

    const renderMobileMenu = () => {
      if(!this.props.authenticated){
        return(
          <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={this.handleMenuClose}>
            <MenuItem component={RouterLink} to='/user/login' onClick={this.handleMobileMenuClose}>
              <p>Login</p>
            </MenuItem>
            <MenuItem component={RouterLink} to='/organization/register' onClick={this.handleMobileMenuClose}>
              <p>Register Org</p>
            </MenuItem>
          </Menu> 
        )}
      
        else { 
          return(
          <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={this.handleMenuClose}>
              <MenuItem onClick={this.handleMobileMenuClose}>
                <IconButton component={RouterLink} to="/user/notifications" color="inherit">
                  <NotificationButton />
                </IconButton>
                <p>Notifications</p>
              </MenuItem>
              <MenuItem onClick={this.handleProfileMenuOpen}>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
                <p>Profile</p>
              </MenuItem>
          </Menu> )}

    };

    const navlinksPublic = [
      {
        linkTo: '/user/login',
        text: 'Login'
      },
      {
        linkTo: '/organization/register',
        text: 'Register organization'
      }
    ];

    return (
      <div className={classes.root}>

      <MuiThemeProvider theme={theme}>

        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              MentorMatch
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

            {!this.props.authenticated && 
              navlinksPublic.map((elem, i) => (
                <Button key={i} component={RouterLink} to={elem.linkTo} color="inherit">
                  {elem.text}
                </Button>
              ))
            }
            
            {this.props.authenticated && (
              <div>
                {(this.props.currentUser && this.props.currentUser.role === "ADMINISTRATOR" && <Button href="/user/admin/panel" className={classes.button}>Panel</Button>)}
                <IconButton color="inherit" component={RouterLink} to="/user/notifications">
                    <NotificationButton />
                </IconButton>
                <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

              </div>
            )}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="info">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        </MuiThemeProvider>

        {renderMenu}
        {renderMobileMenu()}
      </div>
    );
  }
}

MaterialNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.token !== null,
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MaterialNavbar));