import React from 'react';
import { connect } from 'react-redux';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import { getMentees } from '../../actions/mentees';

import MentorApplications from './MentorApplications';
import MentorAssignment from './MentorAssignment';
import ProfileForms from './ProfileForms';


class AdminPanel extends React.Component {
    state = {
        activeTab: '1',
        mentees: []
    }

    componentDidMount = () => {
        this.props.getMentees()
        .then(res => {
            this.setState({
                mentees: this.props.mentees
            });
        });
        
    }

    toggleTab = tab => {
        if(this.state.activeTab !== tab){
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="AdminPanel">
                <h1> Administrator Panel </h1>

                <Nav tabs>
                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggleTab('1'); }} 
                        >
                            Mentor Applications
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggleTab('2'); }} 
                        >
                            Mentor Assignment
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggleTab('3'); }} 
                        >
                            Profile Forms
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <MentorApplications mentees={this.state.mentees} />
                    </TabPane>

                    <TabPane tabId="2">
                        <MentorAssignment />
                    </TabPane>

                    <TabPane tabId="3">
                        <ProfileForms />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

const mstp = state => {
    return {
        mentees: state.mentees.mentees
    }
}

export default connect(mstp, { getMentees })(AdminPanel);