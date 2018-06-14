import React from 'react';
import './Todo.css';



const Todo = props => { //takes in 'todo' data and displays it; use toggle() here.
    return (
    <div key ={props.id}className={props.completed ? 'completed' : 'todo-item'} onClick={()=>props.toggleFlag(props.id)}>
        
       {props.todo}   
    </div>
        
    )        
}

export default Todo;
// <input type='checkbox' id='checkbox' onClick={props.toggleFlag}/>
