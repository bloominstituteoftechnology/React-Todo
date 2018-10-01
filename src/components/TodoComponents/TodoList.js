// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import todolist from './Todo';
import React from 'react';

const TodoList = props => {
    const {task} = props.list 
    return (
    <div>
        <h1>{task}</h1>
    </div>
    )
}



export default TodoList