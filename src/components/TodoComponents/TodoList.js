import React from "react";
import Todo from "./Todo";
import './Todo.css';

const TodoList = props => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
            {props.todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted} />
                );
            })}
            </ul>
        </div>
    )
}

export default TodoList;
