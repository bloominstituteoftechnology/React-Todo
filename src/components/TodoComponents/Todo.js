import React from 'react';

class TodoList extends React.Component {
    render() {
        const message = this.props.todo.completed ? 'completed' : 'not completed'

        const ClickHandler = () => {
            this.props.handleClick(this.props.todo.id)
        }

        return ( 
            <div onClick={ClickHandler}>
            {this.props.todo.task} is {message}
            </div>
        )
    }
}


export default Todo;