import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div onClick={props.toggleComplete} className='todo-container'>
            {props.taskList.map( task => (
                <div className={props.className.toString()}>
                    <Todo key={task.id} todo={task} />
                </div>
            ))}
        </div>
    )
} 

export default TodoList;