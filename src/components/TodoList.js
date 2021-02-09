// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

export default function TodoList(props) {
    return(
        <div>
            <h1>Tasks to complete:</h1>
            {props.todos.map((task) =>(
             <Todo key={task.id} task={task} toggleTask={props.toggleTask} /> 
            ))}
        </div>
    )
}