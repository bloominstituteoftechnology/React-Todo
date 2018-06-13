import React from 'react';

const Todo = (props) => {
    return (
        <p id={props.todo.id}>{props.todo.task}</p>
    );
}
 
export default Todo;

