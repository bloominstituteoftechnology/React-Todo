// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoList = props => {
    return (
        <ul>
            {props.todoProps.map(todo => {
                return <li key={Math.random()}>{todo.task}</li>
        })}
        </ul>
    );
};

export default TodoList;