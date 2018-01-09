import React, { Component } from 'react';

class ToDo extends Component {

    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }
    toggleClick = () => {
        this.setState ({
            clicked: !this.state.clicked
        });
    };

    render() {
        const style = {
            textDecoration: (this.state.clicked === true) ? "line-through" : "none"
        };
        return (
            <div style={style} onClick={this.toggleClick}>{this.props.todo}</div>
        );
    };
}

export default ToDo;