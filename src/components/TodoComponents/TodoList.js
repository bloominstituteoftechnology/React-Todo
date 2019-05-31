// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(task => (
                <Todo id={task.id} task={task.task} completed={task.completed} toggleTodo={props.toggleTodo} />
            ))}
        </div>
    )
}

export default TodoList;