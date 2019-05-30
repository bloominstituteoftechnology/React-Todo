import React from 'react';
import './Todo.css';
class Todo extends React.Component {
    render() {
        return (
        <p className={`todo${this.props.completed ? " completed" : ""}`} id={this.props.id} onClick={this.props.completeTask}>
            {this.props.task}
        </p>
        )
    }
}

export default Todo;