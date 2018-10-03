// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
const ToDoNow = props => {
    return (
        <div>
        <h4>{props.ToDoing.map(todo => 
        {return <div onClick={props.changeStyle}>{todo.taskToDo}</div>
        })}</h4>

            <form onSubmit={props.addNewTask}>
                    <input 
                    type = "text"
                    name = "newTask"
                    onChange={props.changeHandler}
                    placeholder = "...todo"
                    value={props.newTask}
                    value={props.newId}
                    value={props.newCompleted}
                    />
                    <button type="submit" onClick={props.addNewTask}>
                    Add Todo
                    </button>
                    <button type="submit" onClick={props.clearTask}>
                    Clear Completed
                    </button>
            </form>
        </div>
    )
}

export default ToDoNow