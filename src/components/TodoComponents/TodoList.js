import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    
    return (
        <div className='todo-tasks'>
            {props.toDoItems.map(item => (
                <Todo 
                taskData={item} 
                key={item.id} 
                toggleTask={props.toggleTask}
                />
            ))}
        </div>
    )
}

export default TodoList