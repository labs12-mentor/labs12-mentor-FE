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

import { getSpecificMatch, getUsers } from '../../../actions';

import Recommended from './Recommended';
import MapView from './MapView';

class Assignment extends React.Component {
    state = {
        activeTab: '1',
        currentMatch: {}
    }

    async componentDidMount() {
        await this.props.getSpecificMatch(this.props.match.params.id);
        await this.props.getUsers();        
    }

    toggleTab = tab => {
        if(this.state.activeTab !== tab){
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        let mentorMatch = {};
        let menteeMatch = {};
        if(this.props.match.params.role === 'mentor'){
            this.props.users.forEach(user => {
                if(user.id === this.props.currentMatch.mentor_id){
                    mentorMatch = user;
                }
            });
        } else if (this.props.match.params.role === 'mentee'){
            this.props.users.forEach(user => {
                if(user.id === this.props.currentMatch.mentee_id){
                    menteeMatch = user;
                }
            });
        }
        return (
            <div className="Assignment">
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
                        <Recommended 
                            currentMatch={this.state.currentMatch} 
                            mentorMatch={mentorMatch}
                            menteeMatch={menteeMatch}
                        />
                    </TabPane>

                    <TabPane tabId="2">
                        <MapView 
                            mentorMatch={mentorMatch}
                            menteeMatch={menteeMatch}
                        />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

const mstp = state => {
    return {
        currentMatch: state.matches.currentMatch,
        users: state.users.users
    }
}

export default connect(mstp, { getSpecificMatch, getUsers })(Assignment);