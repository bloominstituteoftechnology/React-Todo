import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return(
        <div className='todo-list'>

            {props.tasks.map(task => (
                <Todo 
                    toggleCompleted={props.toggleCompleted}
                    key={task.id}
                    task={task} />
            ))}

            <button 
                onClick={() => props.clearCompleted()}
                className='clear-btn'>
                Clear Completed
            </button>

        </div>
    )
}

export default TodoList
