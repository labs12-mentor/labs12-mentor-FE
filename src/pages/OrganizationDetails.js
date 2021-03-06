import React from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row,
    Card,
    CardBody,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import history from '../history';
import { getCurrentUser, getSpecificOrganization } from '../actions';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import BlogPostsPage from './OrgsPage/BlogPostsPage.jsx';

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 10px;
`;

const ProfileContainer = styled.div`
    width: 70%;
    margin: auto;
`;

const AppContainer = styled.div`
    margin: 60px auto;
    width: 80%;
`;

class OrganizationDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
        await this.props.getCurrentUser();
        await this.props.getSpecificOrganization(this.props.user.organization_id);
        this.setState({ user: this.props.user });
    }

    render() {
        return (

            <div>
                <BlogPostsPage />
            </div>
            <AppContainer>
                <Row>
                    <Col sm='12'>
                        <ContainerDiv>
                            <Sidebar />
                            <ProfileContainer>
                                <Row>
                                    <img
                                        src={
                                            this.props.organization.logo
                                                ? this.props.organization.logo
                                                : 'https://picsum.photos/'
                                        }
                                    />
                                </Row>
                                <Row>
                                    <h1>{this.props.organization.name}</h1>
                                </Row>
                                <Row>
                                    <p>{this.props.organization.description}</p>
                                </Row>
                            </ProfileContainer>
                        </ContainerDiv>
                    </Col>
                </Row>
            </AppContainer>
        );
    }
}

OrganizationDetails.propTypes = {
    user: PropTypes.object.isRequired,
    organization: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser
            ? state.auth.currentUser
            : { id: 0, email: '', organization_id: 0 },
        organization: state.organizations.currentOrganization
            ? state.organizations.currentOrganization
            : { id: 0, name: '' }
    };
};

export default connect(
    mapStateToProps,
    { getCurrentUser, getSpecificOrganization }
)(OrganizationDetails);
