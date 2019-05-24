import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../../../history';
import NavPills from "../../../../material-components/NavPills/NavPills.jsx";
import Button from "../../../../material-components/CustomButtons/Button.jsx";
import FirstPage from '@material-ui/icons/FirstPage';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles"

import { getSpecificUser, getSpecificMentor } from '../../../../actions';

import ProfileInfo from './ProfileInfo';
import SubmittedApplication from './SubmittedApplication';

import styled from 'styled-components';
import { theme } from '../../../../themes.js';

const AppContainer = styled.div`
    width: 80%;
    margin: 80px auto;
`;

const styles = theme => ({
    root: {
      marginTop: '80px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap'
    },
    btn: {
        marginTop: '20px',
    }
});


class Application extends React.Component {
    state = {
        activeTab: '1',
        user: null,
        mentor: null
    };

    async componentDidMount() {
        await this.props.getSpecificMentor(this.props.match.params.id);
        await this.props.getSpecificUser(this.props.mentor.user_id);

        this.setState({
            ...this.state,
            user: this.props.user,
            mentor: this.props.mentor
        })
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    backBtnClick = e => {
        e.preventDefault();
        history.goBack();
    }

    render() {
        const { classes } = this.props;
        return (
            <AppContainer>
            <div className={classes.root} >
                <Button 
                    justIcon 
                    variant="outlined" 
                    className={classes.btn} 
                    size="medium" 
                    color="info"
                    onClick={e => this.backBtnClick(e)}
                >
                    <FirstPage />
                </Button>
                <NavPills
                    color="info"
                    tabs={[
                        {
                        tabButton: "Profile Information",
                        tabContent: (

                            <ProfileInfo
                                user={this.state.user}
                                mentor={this.state.mentor}
                            />
                        )
                        },
                        {
                        tabButton: "Mentor Application",
                        tabContent: (
                            <SubmittedApplication />
                        )
                        }
                    ]}
                />
                </div>
            </AppContainer>
        );
    }
}

Application.propTypes = {
    match: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        mentor: state.mentors.currentMentor,
        user: state.users.currentUser
    };
};

const mapDispatchToProps = {
    getSpecificUser,
    getSpecificMentor
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Application));
