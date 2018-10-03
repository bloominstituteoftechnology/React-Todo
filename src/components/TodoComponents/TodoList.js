// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
const ToDoNow = props => {
    return (
        <div>
        <h4>{props.ToDoing.map(todo => 
        {return <li>{todo.taskToDo}</li>
        })}</h4>

            <form onSubmit={props.addNewTask}>
                    <input 
                    type = "text"
                    name = "newTask"
                    onChange={props.changeHandler}
                    value={props.newTask}
                    />
                    <button type="submit" onClick={props.addNewTask}>
                    Add Todo
                    </button>
            </form>
        </div>
    )
}

export default ToDoNow