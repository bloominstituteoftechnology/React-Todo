import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return(
        <div className="todo-list">
            {props.tasks.map(task => (
                <Todo
                    toggComplete={props.toggComplete}
                    key={task.id}
                    task={task}
                />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList;