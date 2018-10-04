// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
const ToDoNow = props => {
   
    return (

        <div>
        <h4>{props.ToDoing.map((todo, id) => 
        {return <div 
            key={id}
            className={todo.completed}
            onClick={() => props.changeStyle(id)}>{todo.taskToDo}</div>
            
        })}</h4>

            <form onSubmit={props.addNewTask}>
                    <input 
                    type = "text"
                    name = "newTask"
                    completed = "newDeleted"
                    onChange={props.changeHandler}
                    placeholder = "...todo"
                    value={props.newTask}
                    value={props.newId}
                    value={props.newCompleted}
                    value={props.newDeleted}
                    />
                    <button type="submit" onClick={props.addNewTask}>
                    Add Todo
                    </button>
                    <button type="submit" onClick={props.filterCharacter}>
                    Clear Completed
                    </button>
            </form>
        </div>
    )
}

export default ToDoNow