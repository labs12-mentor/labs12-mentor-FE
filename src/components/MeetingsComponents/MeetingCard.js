import React from 'react';
import MeetingsForm from './MeetingsForm.js';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody } from 'reactstrap';
import { deleteMeeting } from '../../actions';

class MeetingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prevState) => ({
            modal: !prevState.modal
        }));
    }

    render() {
        const externalCloseBtn = (
            <button
                className='close'
                style={{ position: 'absolute', top: '15px', right: '15px' }}
                onClick={this.toggle}
            >
                &times;
            </button>
        );
        return (
            <div>
                <h3>{this.props.content}</h3>
                <h4>Match_id:{this.props.match_id}</h4>

                <Button color='danger' onClick={() => this.props.deleteMeeting(this.props.id)}>
                    Delete
                </Button>
                <Button color='warning' onClick={this.toggle}>
                    Edit
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                    external={externalCloseBtn}
                >
                    <ModalBody>
                        <MeetingsForm
                            canEdit={true}
                            id={this.props.id}
                            content={this.props.content}
                        />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    deleteMeeting
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeetingCard);
