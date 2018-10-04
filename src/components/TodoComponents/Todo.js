import React from 'react';


const Todo = props => {
    return (
        <div
        style={props.newItem.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => props.toggleComplete(props.newItem.id)}
        >
            {props.newItem.task}
        </div>
    );
};

export default Todo;