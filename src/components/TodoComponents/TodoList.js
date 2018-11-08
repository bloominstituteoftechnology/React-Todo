// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div>
            <h1 className='title'>ToDo List</h1>
            <div className='task-container'>
                {props.todos.map(todo => (
                    <Todo 
                    key={todo.id} 
                    todoTask={todo} 
                    taskComplete={props.taskComplete} 
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;