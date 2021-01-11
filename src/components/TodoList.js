// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return(
        <div className='todo-list'>
            {props.todoS.map(item => (
                <Todo 
                key = {item.id} 
                item = {item} 
                handleToggle = {props.handleToggle} 
                />
                ))}
            <button onClick={props.handleCompleted} className='clear-todo'>
                Clear Todo
            </button>
        </div>
    )
}

export default TodoList; 
