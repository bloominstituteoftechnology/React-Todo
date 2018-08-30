import React from 'react';
import './Todo.css';

const Todo = props => {
    return(
        <li className="todoItem"
            onClick={() => props.handleTodoClick(props.todo.id)}
            name={props.todo.task}
        >{props.todo.task}
        </li>
    );
}

export default Todo;