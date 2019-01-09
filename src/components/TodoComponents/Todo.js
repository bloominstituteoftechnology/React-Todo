import React from  'react';
import './Todo.css'

const Todo = props =>{ 
    console.log(props.activity.completed)
    return <li className={props.activity.completed === true ? 'strike' : '' } completed={props.activity.completed} onClick={props.taskCompleted}>{props.activity.task}</li> 
}

export default Todo;