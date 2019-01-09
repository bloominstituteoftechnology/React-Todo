import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
    return (
        <div className="list">
        {props.list.map((item) =>
        <Todo todoChange={props.todoChange} id={item.id} key={item.id} task={item.task} completed={item.completed}/>
        )}
        </div>
    )
}

export default TodoList;