import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {};
    }
    completed = () => {
        const clicked = !this.props.todo.completed;
        
        this.props.completed(this.props.index, clicked);
    }
    remove = () => {
        this.props.remove(this.props.index);
    }

    render() {
        const clicked = this.props.todo.completed ? 'line-through' :'none';
        const parentStyles = {
            textDecoration: clicked,
            padding: '.2rem .2rem .2rem 0.1rem',
            cursor: 'pointer',
        };
        return(
            <li>
                <div style={parentStyles} onClick={this.completed}>
                    {this.props.todo.text} 
                </div>
                <button style={{background: 'red', color: 'white',}} 
                    onClick={this.remove}>
                    delete
                </button>
            </li>
        );
    }
}

export default Todo;