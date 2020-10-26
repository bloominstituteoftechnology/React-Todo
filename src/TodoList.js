import React from 'react';
import Task from './Task'

const TodoList = props =>{
    
    const handleClick=()=>{
        props.handleClearItems();
    }

    return(
        <div className='todo-list'>
            {props.list.map(task => (
                <Task handleToggleItem={props.handleToggleItem} key={task.id} task={task} />
            ))}
            <button onClick={handleClick} className='clear-btn'>
                Clear Completed Tasks
            </button>
        </div>
    )

}

export default TodoList;