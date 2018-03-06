import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        };
    }
    completed = (event) => {
        const clicked = !this.state.clicked;
        this.setState({
            clicked: clicked,   
        });
        this.props.completed(event);
    }

    render() {
        const clicked = this.state.clicked ? 'line-through' :'none';
        const parentStyles = {
            textDecoration: clicked,
            padding: '.2rem .2rem .2rem 0.1rem',
            cursor: 'pointer',
        };
        const xStyles = {
            color: 'red',
        }
        return(
            <div style={parentStyles} onClick={this.completed}>{this.props.todo.text} <span>::</span> <span style={xStyles}>x</span></div>
        );
    }
}

export default Todo;