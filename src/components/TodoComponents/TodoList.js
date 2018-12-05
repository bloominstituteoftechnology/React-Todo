// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const todos = [
    {
    task: 'Apples',
    id: 1528817077286,
    completed: false
    },
    {
    task: 'Oranges',
    id: 1528817084358,
    completed: false
    },
    {
    task: 'Milk',
    id: 1528817084358,
    completed: false
    },
    {
    task: 'Toilet Paper',
    id: 1528817084358,
    completed: false
    }
]

const TodoList = () => {
    
    return (
        <div> 
             {todos.map(todo => <div>{todo.task}</div>)}
        </div>
    )
}

export default TodoList;
