import React from 'react';
import './Todo.css';
import Todo from './Todo.js';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    return (
        <div>
            {props.array.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleClick={props.handleClick}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;