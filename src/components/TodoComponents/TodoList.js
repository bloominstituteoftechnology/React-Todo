// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// this will do what characterlist did

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.task.map(todoInMap => (
                <Todo
                    key={todoInMap.task}
                    todoOnProps={todoInMap}
                    />
            ))}
        </div>
    )
}

export default TodoList;