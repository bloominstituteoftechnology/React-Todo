// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map((todo, index) => <Todo task={todo.task} key={index} />)}
        </ul>
    );
}

export default TodoList;