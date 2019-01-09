import React from  'react';
import './Todo.css'

const Todo = props =>{ 
    console.log(props.activity.completed)
    return <li className="sign" onClick={props.taskCompleted}>{props.activity.task}</li> 
}

export default Todo;