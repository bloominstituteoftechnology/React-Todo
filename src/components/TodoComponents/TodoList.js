// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = (props) => {
    return <ul>
        {props.todo.map((todo,i) => <Todo  key= {i} todo={todo} completed={props.todoCompleted} className={props.todoCompleted ? 'completed':'waiting'}/>)}
        </ul>;
}

export default TodoList;