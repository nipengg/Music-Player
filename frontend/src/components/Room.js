import React, { Component } from 'react';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false,
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.votesToSkip}</p>
                <p>{this.state.guestCanPause}</p>
                <p>{this.state.isHost}</p>
            </div>
        );
    }
}