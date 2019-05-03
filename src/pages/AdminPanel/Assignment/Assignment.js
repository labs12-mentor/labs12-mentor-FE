import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import classnames from 'classnames';

import Recommended from './Recommended';
import MapView from './MapView';

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
                            Recommended
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggleTab('2'); }} 
                        >
                            Map View
                        </NavLink>
                    </NavItem>
                </Nav>                

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Recommended />
                    </TabPane>

                    <TabPane tabId="2">
                        <MapView />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Application;