import React from 'react';
import Todo from './Todo.js';

const TodoList = (props)=>{
    return (
        <ul>
            {props.todoData.map((todoItem)=>{
                return (
                    <Todo key={todoItem.id} todoItemData={todoItem} completeTask={props.completeTask}/>
                )
            })}
        </ul>
    )
}

export default TodoList;