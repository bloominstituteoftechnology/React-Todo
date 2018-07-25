import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div className="toDoContainer">
            {props.list.map(todo => <p onClick={props.completeTask} data-id={todo.id} key={todo.id}>{todo.task}</p>)}
        </div>
    );
}

export default Todo;