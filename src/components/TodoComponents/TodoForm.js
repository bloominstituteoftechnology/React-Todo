import React from 'react';


const TodoForm = props =>{
    return(
        <div>
            <form onSubmit={props.addNewTask}>
            <input
            type= 'text'
            name='newTask'
            onChange={props.changeHandler}
            value={props.newTask}
            />
            <button type='submit' onClick={props.addNewTask}>
            Add Task
            </button>
            <button type='clear' onClick={props.removeTask}>
            Clear
            </button>
            </form>
        </div>
    )
}

export default TodoForm;


