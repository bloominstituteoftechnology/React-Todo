import React from 'react';

const Todo = props => {
    return (
        <ul>
            {props.tasks.map(task => {
                return <li key={task.id}>{task.nameOfApp}</li>;
            })}
        </ul>
    );
};

export default Todo;