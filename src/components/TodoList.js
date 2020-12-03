// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo.js'

const TodoList = (props) => {

    return(
        <>
        <div className="taskHolder">
            {props.totalList.map((task) => (
                <Todo 
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    completed={task.completed}
                    toggleTask={props.toggleTask}/>
            ))}
        <button 
            className="clearButton"
            onClick={props.deleteTask}>
                Clear Tasks
        </button>

        </div>
        </>

    )
}

export default TodoList