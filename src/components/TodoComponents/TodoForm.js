import React from 'react';

const TodoForm = ( props ) => {
    return (
        <form>
            <input type='text' placeholder='Add a task' onChange={props.changeHandler} value={props.newTask}/>
            <button type='submit' onClick={props.addTask}>Add Task</button>
            <button>Remove Task</button>
        </form>
    );
}

export default TodoForm;