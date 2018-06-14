import React from 'react';

const Todo = (props) => {
    return (
        <p onClick={()=>props.onClick()} id={props.todo.id}>{props.todo.task}</p>
    );
}
 
export default Todo;

