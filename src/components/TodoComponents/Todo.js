import React from 'react';

const Todo = props => {

    return (
        <li id={props.todo.id} onClick={() => props.checkTodo(props.todo)} >
            {props.todo.task} <span class="fa fa-check"></span>
        </li>
    );
};


export default Todo;