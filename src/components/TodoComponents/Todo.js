import React from 'react';
import './Todo.css';

const Todo = (props) =>{
    console.log(props)
   return <li className={props.c}  id ={'id' + `${props.itemkey}`} onClick={props.toggletodoCompl} className={props.DisplayStyle.toString()}>{props.item} </li>
}
export default Todo ;
