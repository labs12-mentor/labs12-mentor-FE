import React from 'react';
import ExperienceForm from './ExperienceForm';
import { deleteExperience } from '../../actions';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ExperienceCard extends React.Component {
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
                <h4>{this.props.name}</h4>

                <Button
                    onClick={() => {
                        this.props.deleteExperience(this.props.experience.id);
                    }}
                >
                    delete
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
                        <ExperienceForm canEdit={true} id={this.props.id} name={this.props.name} />
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
    deleteExperience
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExperienceCard);
