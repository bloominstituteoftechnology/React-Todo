// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = props =>{
// this is where the todos need to be iterated over

return(
    <div className='todoList'>
    {props.todo.map(item => (
    <Todo toggleCompleted= {props.toggleCompleted} key = {todo.id} item={todo}/>
    ))}

    <button onClick={() => props.clearCompleted()} classname= 'clrBtn'>Clear task</button>
    </div>
)
};

export Default TodoList;