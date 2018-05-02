import React from 'react';

const Todo = props => {
    return (
        <ul>
            {props.todos.map(char => {
                return <li key={task.id}>{task.name}</li>;
            })}
        </ul>
    );
};

export default Todo;