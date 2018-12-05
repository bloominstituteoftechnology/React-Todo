// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import todos from './Todo';

const TodoList = () => {
    
    return (
        <div> 
             {todos.map(todo => <div key={todo.completed}>{todo.task}</div>)}
        </div>
    )
}

export default TodoList;
