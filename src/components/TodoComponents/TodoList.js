// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = (props) => {
    console.log(props.todo)
    return <ul>
        {props.todo.map(todo => <Todo  key= {todo.id} todo={todo} completed={props.todoCompleted}/>)}
        </ul>;
}

export default TodoList;