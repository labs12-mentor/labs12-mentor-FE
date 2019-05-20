import React, { Component } from 'react';
import { API_URL } from '../constants/config';
import { connect } from 'react-redux';
import { githubAuthStart, githubAuthSuccess, githubAuthFailure } from '../actions';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { withStyles } from '@material-ui/core/styles';
import Button from '../material-components/CustomButtons/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            // color: ,
        },
    },
});


class OAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            disabled: false
        };

        this.startAuth = this.startAuth.bind(this);
        this.closeCard = this.closeCard.bind(this);
    }

    componentDidMount() {
        const { socket, provider } = this.props;
        this.props.githubAuthStart();

        socket.on(provider, (user) => {
            this.popup.close();
            this.setState({ user });
        });
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }

    checkPopup() {
        const check = setInterval(() => {
            const { popup } = this;
            if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(check);
                this.setState({
                    disabled: false
                });
            }
        }, 1000);
    }

    openPopup() {
        const { provider, socket } = this.props;
        const width = 600,
            height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        const url = `${API_URL}/auth/${provider}?socketId=${socket.id}`;

        return window.open(
            url,
            '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
            scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
            height=${height}, top=${top}, left=${left}`
        );
    }

    startAuth() {
        if (!this.state.disabled) {
            this.popup = this.openPopup();
            this.checkPopup();
            this.setState({
                disabled: true
            });
        }
    }

    closeCard() {
        this.setState({
            user: {}
        });
    }

    render() {
        const { socket, provider, classes } = this.props;
        socket.on(provider, (user) => {
            if (user.token !== undefined || user.token !== null) {
                this.props.githubAuthSuccess({ token: user.token });
            } else {
                this.props.githubAuthFailure({ err: null });
            }
            this.popup.close();
            this.setState({ user });
        });

        return (
        <div>
            <Button
                justIcon
                color="transparent"
                className={classes.iconButtons}
                onClick={this.startAuth}
            >
                <i className="fab fa-github lg" style={{ fontSize: 30 }} />
            </Button>
        </div>
        );
    }
}

OAuth.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    githubAuthStart,
    githubAuthSuccess,
    githubAuthFailure
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(OAuth));

// <button onClick={this.startAuth}>{provider}</button>