// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import todolist from './Todo';
import React from 'react';

const TodoList = () => {
    return (
    <div>
          {todolist.map (item => {
        return  ( <h1>{item.task}</h1> )
        })}
    </div>
    )
}



export default TodoList