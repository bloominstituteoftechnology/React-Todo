import React from 'react';
import Todo from './Todo.js';
import './Todo.css'

const TodoList = (props)=>{
    return (
        <ul className="list">
            {props.todoData.map((todoItem)=>{
                return (
                    <Todo key={todoItem.id} todoItemData={todoItem} completeTask={props.completeTask}/>
                )
            })}
        </ul>
    )
}

export default TodoList;