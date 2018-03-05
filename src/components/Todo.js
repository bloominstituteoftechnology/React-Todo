import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked});
    }

    render() {
        const toDoStyles = this.state.clicked ? { textDecoration: 'line-through' } : {textDecoration: 'none'};
        return (
            <div style={toDoStyles} onClick={this.handleClick}>{this.props.todo}</div>
        )
    }
}

export default Todo;