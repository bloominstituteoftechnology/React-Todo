import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            <h1>Todo List</h1>
            {props.todos.map(todo => {
                return (
                    <Todo id={todo.id} task={todo.task} completed={todo.completed} />
                );
            })}
        </div>
    )
}

export default TodoList;
