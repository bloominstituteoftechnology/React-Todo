// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

const TodoList = props => { 
    return (
        <div className = 'todolist'>
            {props.todoData.map(item => {
                return <p>{item.task}</p>;
            })}
        </div>
    );
}

export default TodoList;