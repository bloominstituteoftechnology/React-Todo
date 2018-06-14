import React from 'react';
import './Todo.css';

const Todo = props => {
    return ( 
       <div className={props.todo.completed ? 'strike-out' : 'list' } onClick = {() => {
           props.toggle(props.todo.id)}}> {props.todo.task} </div>
 
    );
}
export default Todo;