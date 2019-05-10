import React from 'react';
import {connect} from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { updateUser, getCurrentUser } from "../../actions";

class UserProfileForm extends React.Component {
    state = {
        id: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        role: "",
        github_id: "",
        github_token: "",
        organization_id: "",
        deleted: false,
        user: []

    }

    async componentDidMount() {
        await this.props.getCurrentUser();
        this.setState({user: this.props.user})

    }

    updateUser = e => {
        e.preventDefault();
        this.props.updateUser();
    }

    render() {
        return (
            <Form>
                <FormGroup>
              <Label>Hi</Label>
              <Input
                type="text"
                name="content"
                placeholder="content"
                onChange={this.handleChanges}
              />
            </FormGroup>
            </Form>
        )
    }

    handleChanges = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      };
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser
    };
}

const mapDispatchToProps = state => {
    updateUser
    getCurrentUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileForm)

