import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    
    return (
        <div>
             {props.todo.map(item => (
        <Todo 
        toggleTask={props.toggleTask}
        key={item.id} 
        item={item} />
      ))}
        </div>
    )
}
