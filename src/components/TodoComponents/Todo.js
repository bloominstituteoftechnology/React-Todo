//<Todo /> is a component that takes in the todo data and displays the task to the screen.
import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    render() {
        let className = this.props.todo.completed ? 'todo-complete' : 'todo'

        return (
            <div className={className} onClick={() => this.props.handleClick(this.props.todo.id)}>
              {this.props.todo.task}
            </div>
        )
    }
}

export default Todo;