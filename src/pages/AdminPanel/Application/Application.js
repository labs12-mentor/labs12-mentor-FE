import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import classnames from 'classnames';

import ProfileInfo from './ProfileInfo';
import ApplicationRes from './ApplicationRes';

class Application extends React.Component {
    state = {
        activeTab: '1'
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
            <div className="Application">
                <Nav tabs>
                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggleTab('1'); }} 
                        >
                            Profile Information
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggleTab('2'); }} 
                        >
                            Application Response
                        </NavLink>
                    </NavItem>
                </Nav>                

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <ProfileInfo />
                    </TabPane>

                    <TabPane tabId="2">
                        <ApplicationRes />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Application;