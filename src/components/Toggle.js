import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick() {
        this.setState(previous => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return {

        }
    }
}

export default Toggle;