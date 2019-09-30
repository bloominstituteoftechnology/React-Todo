import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.task.map(task=>(
                <Todo key={task.id} task={task} toggleTask={props.toggleTask}/>
            ))}
            <button className='clear-button' onClick={props.clearCompleted}>Completed</button>
        </div>
    )
};

export default TodoList;