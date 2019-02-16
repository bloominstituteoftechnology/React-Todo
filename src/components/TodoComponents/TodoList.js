// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
        <ul>
            {props.todos.map((todo) => (
                <Todo todo={todo} />
            ))}
        </ul>
        </div>
    )
}

export default TodoList;