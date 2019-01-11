import React from  'react';
import './Todo.css'

const Todo = props =>{ 
    // console.log(props.taskCompleted)
    return <li 
    className={`
    ${props.activity.completed === true ? 'strike' : null}
    ${props.activity.hide === true ? 'hide' : 'show'}
    todo-item` } 
    completed={props.activity.completed} 
    onClick={()=>{props.taskCompleted(props.activity.id)}}
     >
     {props.activity.task}
     </li> 
}

export default Todo;