// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo'

function TodoList(props) {
    return (
        <div>
            <h1>Todo List!</h1>
        <div className="toDos">
            {props.todoData.map( item => (
                <Todo key={item.id} todoProp={item} />
            ))}
        </div>
        </div>
    )

}

export default TodoList;