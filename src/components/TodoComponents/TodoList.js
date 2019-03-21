// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

function TodoList(props) {

    return (
        <div>
            {props.todoListProp.map((todoTask, index) => (
                <Todo todoProp={todoTask} key={index} />
            ))}

            {/* //{todoTask.id} */}
        </div>

    )
}
export default TodoList;