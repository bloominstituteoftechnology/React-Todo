import React from 'react';
import TodoList from './TodoList';



function Todo(props) {

    return (
        <li>{props.propsTodo.task}</li>
    )
}



export default Todo;