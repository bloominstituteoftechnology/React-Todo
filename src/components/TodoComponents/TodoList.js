import React from "react";
import Todo from "./Todo"

const TodoList = props => {
    return (
        props.todos.map(todo => {
            return <Todo task={todo.task} key={todo.id} completed={todo.completed}/>
        })
    );
    
}

export default TodoList;