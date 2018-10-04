import React from 'react';
import Todo from './Todo.js'

const TodoList = props => {
    return (
        <div className='list'>
        {props.todos.map(x => 
        <Todo 
            key={x.id} 
            todo={x}
            complete={props.complete}
        />
        )
        }
        </div>
    )
} 

export default TodoList; 