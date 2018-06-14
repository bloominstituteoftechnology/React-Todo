// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoProps.map(todo => {
                return <Todo todoData={todo} todoComplete={props.todoComplete}/>
        })}
        </div>
    );
};

export default TodoList;