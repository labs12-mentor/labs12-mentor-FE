import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import NotificationButton from '../pages/NotificationButton';
import { Collapse, NavbarToggler, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        });
    }

    render() {
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
        const navlinksPrivate = [
            {
                linkTo: '/user/profile',
                text: 'Profile'
            }
        ];

        return (
            <Navbar light expand='md'>
                <NavbarBrand href='/'>MentorMatch</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        {!this.props.authenticated &&
                            navlinksPublic.map((elem, i) => (
                                <NavItem key={i}>
                                    <Link to={elem.linkTo} className='nav-link'>
                                        {elem.text}
                                    </Link>
                                </NavItem>
                            ))}
                        {this.props.authenticated &&
                            navlinksPrivate.map((elem, i) => (
                                <NavItem key={i}>
                                    <Link to={elem.linkTo} className='nav-link'>
                                        {elem.text}
                                    </Link>
                                </NavItem>
                            ))}
                        {this.props.authenticated && <NotificationButton />}
                        {this.props.authenticated && (
                            <NavItem>
                                <Link to='/' onClick={this.props.logoutUser} className='nav-link'>
                                    Log out
                                </Link>
                            </NavItem>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

NavbarComponent.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = {
    logoutUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarComponent);
