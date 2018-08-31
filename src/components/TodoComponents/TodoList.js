// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo.js';
// import './Todo.css';

function TodoList(props) {
    console.log(props);
    return <ul>{props.todos.map(todo => <Todo key={todo.id} todo={todo} completedTask={props.completedTask} />)}</ul>;
}

export default TodoList;
