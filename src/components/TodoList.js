// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    return (
        <div>
            {props.toDoList.map(task => (
                <Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted} />
            ))}
            <button onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList;