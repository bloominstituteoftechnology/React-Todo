import React from 'react';
import ToDo from './Todo';
import './Todo.css';

const TodoList = (props) => {
    return(
        <ul>{props.value.map(item => <ToDo obj={item}  key={item.id}/> )}</ul>
    )
}

export default TodoList;

