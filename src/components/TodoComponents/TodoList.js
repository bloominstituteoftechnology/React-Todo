// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.todoProps.map(todo => {
                return <Todo todoData={todo} todoComplete={props.todoComplete} key={Math.random()}/>
        })}
        </div>
    );
};

export default TodoList;