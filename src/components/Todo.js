import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        let fini;
        if (this.state.clicked)  fini = {textDecoration: 'line-through'}
        else fini = {textDecoration: 'none'}
        return (
            <div style = {fini} onClick = {this.handleClick}>{this.props.todo}</div>
        );
    }
}

export default Todo;