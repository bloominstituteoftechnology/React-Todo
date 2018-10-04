import React from "react";
import './Todo.css';

const Todo = props => {
    return (
        <div className="todo" style={props.newTodo.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.todoComplete(props.newTodo.id)}>
            {props.newTodo.task}
        </div>
    );
};

export default Todo;