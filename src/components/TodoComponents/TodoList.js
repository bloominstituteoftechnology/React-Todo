import React from "react";
import './Todo.css';

import ToDo from './Todo'

const TodoList = props => {
    return (
        <ul>
            {props.list.map((i, index) => <ToDo
                item={i}
                markComplete={props.markComplete}
                key={index}
            />)}
        </ul>
    );
}

export default TodoList;