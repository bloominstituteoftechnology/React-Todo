// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.tasks.map((task) => (
                <Todo 
                key={task.id}
                tasks={task}
                completedTask={props.completedTask}/>
            ))}
            <button onClick={props.completedTask}>Clear Tasks</button>
        </div>
    )
}

export default TodoList