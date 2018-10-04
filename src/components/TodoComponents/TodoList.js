// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = ({list, toggle}) => {

    return (
        <div className='list-container'>
            {
                list.map(todo => {
                    return <Todo todo={todo} key={todo.id} toggle={toggle}/>
                }).reverse()
            }
        </div>
    );
}

export default TodoList;

