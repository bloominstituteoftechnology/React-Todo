// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo"

const TodoList = props => {
    return (
        props.todolist.map(todo => {
            return <Todo task={todo.task} key={todo.id} completed={todo.completed}/>
        })
    );
    
}

export default TodoList;