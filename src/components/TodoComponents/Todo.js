import React from 'react';
import './Todo.css';

const Todo = (props) =>{
    console.log(props)
   return <li >{props.item}</li>
}
export default Todo ;
