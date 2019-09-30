// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log('this is TodoList props:', props)
    return (
        <div>
            {props.todo.map(task => (
                <Todo key={task.id} task={task.name} completed={task.completed} toggleComplete={props.toggleComplete} />
            ))}
            <button onClick={props.clearComplete}>
                Clear Finished Tasks
            </button>
        </div>
    )
}

export default TodoList;