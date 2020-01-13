/*
<Todo /> is a component that takes in the todo data and displays the task to the screen.
 */

import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.task}</p>
            </div>
        );
    }
};

export default Todo;