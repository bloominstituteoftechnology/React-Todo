// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    return (
        <div>
            <h1>Things I need to do</h1>

            {props.tasks.map(task => (
                <Todo 
                    key={task.id} 
                    task={task}
                    toggleCompleted={props.toggleCompleted}  
                />
            ))}
        </div>
    )
}

export default TodoList;