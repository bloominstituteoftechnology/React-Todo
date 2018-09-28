import React from 'react';
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return (
        <ul>
            {
                props.tasks.map(task => {
                    return <Todo completed={task.completed} id={task.id} key={task.id} todo={task.task} toggleClass={props.toggleClass}/>
                })
            }
        </ul>
    )
}

export default TodoList