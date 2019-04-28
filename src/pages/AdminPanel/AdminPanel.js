import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
    InputGroup,
    Input
} from 'reactstrap';
import classnames from 'classnames';

import MentorApplications from './MentorApplications';
import MentorAssignment from './MentorAssignment';
import ProfileForms from './ProfileForms';


class AdminPanel extends React.Component {
    state = {
        activeTab: '1'
    }

    toggle = tab => {
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
                            onClick={() => { this.toggle('1'); }} 
                        >
                            Mentor Applications
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }} 
                        >
                            Mentor Assignment
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }} 
                        >
                            Profile Forms
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <MentorApplications />
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

export default AdminPanel;