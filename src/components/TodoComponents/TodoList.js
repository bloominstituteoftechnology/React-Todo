// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

import Todo from './Todo';


const TodoList = (props) => {
    return (
        <div className='listItem' >
            {props.list.map(item => <Todo key={item.id} obj={item}/>)}
        </div>
    )
}

export default TodoList