import React from 'react';
import Todo from './Todo';

function TodoList (props) {    
    console.log(props.tasks)
    return (
        
        
        <ul>           
           {props.tasks.map(task => <Todo task={task}  addComplete={props.addComplete}/>)}            
        </ul>        
    )
}

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default TodoList