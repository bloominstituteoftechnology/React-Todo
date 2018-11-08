import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = props => {
    return (
        <div className='todo-list'>
            <h1>Today</h1>

            {props.tasksList.map((taskFromMap) => (
                <Todo 
                    key={taskFromMap.id} 
                    taskOnProps={taskFromMap}
                    completeTask={props.completeTask}  
                />
            ))}
        </div>
    );
};

export default TodoList;