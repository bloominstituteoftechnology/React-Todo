// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ReactDOM from "react-dom";
import Todo from './Todo';
import './Todo.css'

function TodoList (props){
    const list = props.list;
    console.log(list)
    const listItems = list.map(todo => <Todo styles={todo.completed} task={todo.task} updateTask={props.updateTask}/>)
    return (
        <ul>{listItems}</ul>
    )
}

export default TodoList