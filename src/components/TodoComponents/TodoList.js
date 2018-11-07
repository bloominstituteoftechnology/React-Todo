import React from "react";
import './Todo.css';

import ToDo from './Todo'

const TodoList = props => {
    return (
        <ul>
            {props.list.map(i => <ToDo
                item={i}
                markComplete={props.markComplete}
            />)}
        </ul>
    );
}

export default TodoList;