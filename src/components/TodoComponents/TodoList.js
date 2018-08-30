// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuidv4 from 'uuid/v4';

import './TodoList.css';

export default function TodoList(props) {
    return (
        <div className="todo-list">
            <h2>TodoList Component</h2>
            <TodoForm addTodo={props.addTodo} />
            {props.todoList.map(({title, body, time}) => {
                return <Todo key={uuidv4()} title={title} body={body} time={time} />
            })}
        </div>
    )
}