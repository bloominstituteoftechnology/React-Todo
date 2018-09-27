// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => (
    <div>
        {props.todos.map((element, index) => {
            return <Todo text={element.text} onClick={props.function} id={index}/>
        })}
    </div>
);

export default TodoList;