// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';



const ToDoList = (props) => {
    return (
        <div>

        {props.list.map(item => {
            
            return <Todo item={item} completed={item.completed}key={item.id} id={item.id} onClick={props.onClick} />
        
        })}
            

        </div>
    )
}

export default ToDoList;
/*  */