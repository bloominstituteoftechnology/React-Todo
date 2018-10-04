import React from "react";
import Todo from "./Todo"

const TodoList = props => {
    return (
        props.todos.map(todo => {
            return(
                <Todo todo={todo} key={todo.id} completed={todo.completed} completedHandler={props.completedHandler} />
            );
        }))
}

export default TodoList;