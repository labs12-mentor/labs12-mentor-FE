import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import classnames from 'classnames';

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
                </Nav>                

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        
                    </TabPane>

                    <TabPane tabId="2">
                        
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Application;