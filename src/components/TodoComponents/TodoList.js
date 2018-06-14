// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';


const TodoList = props => {
    return (
    <ul>
        {props.listTasks.map(listed => {
            return <Todo key= {Math.random()} singleTodo = {listed.task}/>;
        })}
    </ul>
    );
};

export default TodoList;