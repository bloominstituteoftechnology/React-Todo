import React from 'react';

//render each todo list task

class Todo extends React.Component {
    render() {
        const message = this.props.todo.completed ? 'done' : 'not done'

        const handleClick = () => {
            this.props.handleClick(this.props.todo.id)
        }

        return (
            <div onClick={handleClick}>
                {this.props.todo.task} is {message}
            </div>
        )
    }
} 

export default Todo;