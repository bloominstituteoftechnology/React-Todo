import React from 'react';
import './Todo.css';

 const Todo = (props) =>{
    return <div onClick={props.onClickMethod} id={props.id}> {props.task} </div>;
}


export default Todo;