import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        };
    }
    completed = () => {
        const clicked = !this.state.clicked;
        this.setState({
            clicked: clicked,   
        });
    }

    render() {
        const clicked = this.state.clicked ? {textDecoration: 'line-through'}: {textDecoration: 'none'};
        return(
            <div style={clicked} onClick={this.completed}>{this.props.todo}</div>
        );
    }
}

export default Todo;