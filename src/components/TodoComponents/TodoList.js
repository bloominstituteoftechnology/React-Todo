// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => {
    return (
        <div className='todo-container'>
        <ul>
            {props.listItem.map(item => { 
                return (
                    <li>
                        <Todo completedFunc={props.completedFunc} id={item.id.toString()} task={item.task} completed={item.completed} /> 
                    </li>
                )
            }
            )}
        </ul>
        </div>
        )      
}

export default TodoList;