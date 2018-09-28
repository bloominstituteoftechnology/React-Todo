// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.tasks.map(todos => {
                return (
                <ul key={todos.id}>
                <Todo line={props.line} trueFalse={props.trueFalse} todo={todos} />
                </ul>
                );
            })}
        </div>
    )
}

export default TodoList