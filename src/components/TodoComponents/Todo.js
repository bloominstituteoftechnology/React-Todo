import React from 'react';
import './Todo.css';



const Todo = props => { //takes in 'todo' data and displays it; use toggle() here.
    return (
    <li className='todo-item'>
       <input type='checkbox' id='checkbox' onClick={props.toggleFlag}/>{props.todo}   
    </li>
        
    )        
}

export default Todo;
//{props.task}
// <input type='checkbox' id='checkbox' onClick={props.toggleFlag}/>
