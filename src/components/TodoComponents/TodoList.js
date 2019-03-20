// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

function TodoList(props) {

    return (
        <div>
            {props.todoListProp.map(todoTask => (
                <Todo todoProp={todoTask} key={todoTask.id} />
            ))}
        </div>
        // <div className="todoList">
        // {}
        // </div>
    )
}
export default TodoList;