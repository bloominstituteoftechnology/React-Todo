// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
    return <ul>{props.todos.map(todo => <ToDo todo={todo}/>)}</ul>;
}

export default ToDoList;
