// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
    // console.log(props)
    return (
        <div>
            {props.arr.map(item => {
                return <Todo task={item.task} key={item.id} toggleCompleted={props.toggle} id={item.id} completed={item.completed} />
            })}
        </div>
    )
}

export default TodoList;