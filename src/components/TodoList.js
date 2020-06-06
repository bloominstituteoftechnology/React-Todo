import React from 'react'
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <div className='Todo-List'>
            <h2>To Do List</h2>
            {props.todoItems.map(item => 
        (
            <Todo key={item.id} item={item} toggleTodo={props.toggleTodo}/>
        ))}
        <button className='clear-btn' onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}
