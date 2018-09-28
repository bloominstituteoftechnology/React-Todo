import React from 'react';

//render each todo list task

class Todo extends React.Component{
    todoClicked = () => {
        this.props.handleClick(this.props.id)
    }

    render() {
        const message = this.props.completed ? 'done' : 'not done'

       

        return (
            <div onClick={this.todoClicked}>
                {this.props.task} is {message}
            </div>
        )
    }
} 

export default Todo;