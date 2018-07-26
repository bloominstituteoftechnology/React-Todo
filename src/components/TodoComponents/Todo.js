import React from 'react';

const Todo = props => {
    return (
        <div style={props.todo.completed ? { textDecoration: 'line-through' } : null} 
        onClick={() => props.handleToggleComplete(props.todo.id)}
        >
        {props.todo.task}
            {/* <Todo /> is a component that takes in the todo data and displays the task to the screen. */}

        </div>
    );
};

export default Todo;