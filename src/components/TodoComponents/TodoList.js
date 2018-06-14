// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
/*import Todo from './Todo'*/

const TodoList = (props) => {  //receives array, iterates over array, generates new 'Todo' for each.
    console.log(props);
    return (
    <ul className='todo-list'>
           {props.todolist.map((todo) => {
            return <li className='todo-item' key={todo.task}>{todo.task}<input type='checkbox' id='checkbox' /></li>
            
            
        })}
    </ul>
)
}

export default TodoList;

