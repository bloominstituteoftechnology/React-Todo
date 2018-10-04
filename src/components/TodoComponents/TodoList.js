import React from 'react';
import './Todo.css';

const TodoList = (props) => {
    return (
        <div className="todolist">
            {props.todoList.map(item => {
                return (
                    <p onClick={props.itemStrike}>{item}</p>
                );
            })}
        </div>
    )
}

export default TodoList;
