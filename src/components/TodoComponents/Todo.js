// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from 'react';

class Todo extends React.Component {

    render () {
        // const message = this.props.todo.completed ? 'done' : 'not done';

        const TodoClickHandler = () => {
            this.props.handleClick(this.props.todo.id);
        }

        return (
            <div onClick ={TodoClickHandler} style = {{textDecorationLine: this.props.todo.completed ? 'line-through' : 'none'}}>
                {this.props.todo.task}

                {/* {this.props.todo.task} is {message} */}
                {/* No longer needed after testing purposes */}
            </div>
        )
    }
}

export default Todo;
