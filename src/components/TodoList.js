// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = props =>{
// this is where the todos need to be iterated over

return(
    <div className='todoList'>
    {props.completed.map( todo => (
    <Todo toggleCompleted= {props.toggleCompleted} key = {todo.id} todo={todo}/>
    ))}

    <button onClick={() => props.clearCompleted()} className= 'clrBtn'>Clear task</button>
    </div>
)
};

export default TodoList;