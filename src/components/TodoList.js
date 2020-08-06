// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import Todo from './Todo'

const TodoList = props => {
    return(
        <div className='todo-list'>
            <div className='tasks-list'>
                {props.toDos.map(task => (
                    <Todo 
                        toggleTask={props.toggleTask} 
                        key={task.id}
                        task={task}
                    />
                ))}
            </div>
            <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button> 
        </div>
    )
}

export default TodoList;