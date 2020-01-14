import React from 'react';
import Todo from './Todo';

const TodoList = props => {
   
    return (
        <div className='task-list'>
            {props.task.map(task => (
                <Todo 
                    key={task.id} 
                    task={task} 
                    toggleItem={props.toggleItem} 
                />
            ))}
        </div>
    )
};

export default TodoList;