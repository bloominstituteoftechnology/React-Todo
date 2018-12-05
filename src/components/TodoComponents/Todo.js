import React from 'react';
import './Todo.css';


const Todo = props => {
    console.log(props.todo)
    // const { todo, completed } = props.todoListProp;
    return (
    <div className="todo">
            <h2>{props.todo.todo}</h2>
    </div>
    );
};

export default Todo;
