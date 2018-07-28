import React from 'react';




const TodoForm=props=>{
    return (
        <form>
            <input type='text'
            placeholder=' Enter a task'
            value={props.newTask}
            onChange={props.newTaskChange}
            />
            <button className='waves-effect waves-light btn todobtn'
            onClick={props.addToDo}>
            Add Task
            </button>
            <button className='waves-effect waves-light btn ccbtn'
            onClick={props.clearCompletedToDos}>
            Clear Completed
            </button>
        </form>
    )
}

export default TodoForm;
