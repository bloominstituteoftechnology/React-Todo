import React from 'react';
import './Todo.css';

//render each todo list task

class Todo extends React.Component {
    render() {
        const message = this.props.todo.completed ? 'YES' : 'NO'

        const handleClick = () => {
            this.props.handleClick(this.props.todo.id)
        }

        return (
            <div onClick={handleClick} className={this.props.todo.class}>
                Did you {this.props.todo.task}? {message}!!!!!!!
            </div>
        )
    }
} 

export default Todo;