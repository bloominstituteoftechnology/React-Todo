import React from 'react';
import Todo from './Todo.js';

const TodoList = (props)=>{
    return (
        <ul>
            {props.list.map((todoItem)=>{
                return (
                    <Todo key={todoItem.id} todoItem={todoItem.task}/>
                )
            })}
        </ul>
    )
}

export default TodoList;