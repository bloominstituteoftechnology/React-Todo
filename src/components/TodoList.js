import React from 'react';
import Todo from './Todo'

const taskList = props =>{
    return(
        <div className='todoList'>
            {props.taskList.map(todo => (
                <Todo 
                key={todo.id} 
                todo={todo}
                toggleTodo={props.toggleTodo} 
                />
            ))}
            <button className='clear-btn' onClick={props.clearTodo}>
            Clear Todo List
            </button>
        </div>
    );
};

export default taskList;