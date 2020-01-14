import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                onClick={() => this.props.toggleCompleted(this.props.todo.id)}
                className={this.props.todo.completed ? "completedTask" : ""}>
                {this.props.todo.task}


            </div>
        );
    }
}
export default Todo;