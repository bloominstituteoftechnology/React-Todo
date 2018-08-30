import React from 'react';


function Todo(props) {
    return <li onClick={() => {

        if (props.todolist.completed) {
            props.todolist.completed = false;

        }
        else {
            props.todolist.completed = true;
        }
    }
    }>
        {props.todolist.item}
    </li>

}
export default Todo; 