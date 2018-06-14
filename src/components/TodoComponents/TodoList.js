// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoList = props => {
    return (
        <ul>
            {props.todo.map( (item, i) => {
                return (
                    <li key={item.id}id={item.id}>{item.name}</li>);
            })}
        </ul>

    )
}

export default TodoList;
