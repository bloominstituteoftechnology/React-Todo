// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoList = props => {
    return (
        <ul>
            {props.Todo.map(todo => {
                return <li key={Math.random()}>{todo}</li>
        })}
        </ul>
    );
};

export default TodoList;