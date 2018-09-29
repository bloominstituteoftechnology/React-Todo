// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

import Todo from './Todo';


const TodoList = (props) => {
    return (
        <div>
            {props.list.map(item => <Todo key={item.id} obj={item} completedHandler={props.completedHandler} importantHandler={props.importantHandler}/>)}
        </div>
    )
}

export default TodoList