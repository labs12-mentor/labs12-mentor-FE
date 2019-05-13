import React from 'react';
import {deleteMentee} from '../../actions'
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class MenteeCard extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>{this.props.id}</h1>
                <h4>{this.props.name}</h4>

                <Button
                    onClick={() => {
                        this.props.deleteExperience(this.props.experience.id);
                    }}
                >
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    deleteMentee
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenteeCard);