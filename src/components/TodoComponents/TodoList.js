import React from 'react'

const ToDoList = props => {
    
    return(
        <div className='todo-list-pane'>
            {props.toDoItems.map(item => (
                <Todo />
            ))}; 
        </div>

    )
}

export default ToDoList