import React, { Component } from 'react'
import { API_URL } from '../constants/config';

class OAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            disabled: false
        }

        this.startAuth = this.startAuth.bind(this);
        this.closeCard = this.closeCard.bind(this);
    }

    componentDidMount() {
        const { socket, provider } = this.props;

        socket.on(provider, user => {
            this.popup.close();
            this.setState({user});
        });
    }

    checkPopup() {
        const check = setInterval(() => {
            const { popup } = this;
            if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(check);
                this.setState({
                    disabled: false
                });
            }
        }, 1000);
    }

    openPopup() {
        const { provider, socket } = this.props;
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const url = `${API_URL}/auth/${provider}?socketId=${socket.id}`;

        return window.open(url, '',             
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
            scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
            height=${height}, top=${top}, left=${left}`
        );
    }

    startAuth() {
        if(!this.state.disabled){
            this.popup = this.openPopup();
            this.checkPopup();
            this.setState({
                disabled: true
            });
        }
    }

    closeCard() {
        this.setState({
            user: {}
        });
    }

    render() {
        const { socket, provider } = this.props;
        socket.on(provider, user => {
            this.popup.close();
            this.setState({user});
        });
        const { email } = this.state.user;
        
        return (
            <div>
                {email ?
                    <div> 
                        <p onClick={this.closeCard}>
                            X
                        </p>
                        <h4>
                            {`${email}`}
                        </h4>
                    </div>
                    :
                    <div>
                        <button onClick={this.startAuth}>
                            {provider}
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default OAuth;