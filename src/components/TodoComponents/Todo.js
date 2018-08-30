import React from 'react';

const Todo = props => {
    return (
        <li onClick={() => {
            if (props.todo.completed) {
                props.todo.completed = false;
            }
            else {
                props.todo.completed = true;
            }
        }}>
            {props.todo.inputText}
        </li>
    );
}
 
 export default Todo;