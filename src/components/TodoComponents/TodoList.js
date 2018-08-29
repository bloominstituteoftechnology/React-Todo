// your components will all go in this TodoList.js.
import React from 'react';
import Todo from './Todo';
import './Todo.css'

function TodoList(props) {
    return <ul>{props.items.map(item => <Todo item={item.task}/>)}</ul>
}

export default TodoList;
