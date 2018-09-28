// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = (props) =>{
    console.log(props)
    return (
       
        <ul>{props.items.map(item =>(
            
            <Todo toggletodoCompl={props.toggleCompl} key = {item.id} itemkey = {item.id} item ={item.inputTask} DisplayStyle ={item.completed} />
        ))}
             
        </ul>
    )
}

export default TodoList ;
