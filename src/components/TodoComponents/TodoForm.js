import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input type='text' placeholder='Tasks to do today' onChange={props.changeHandler} value={props.newTask}/>
            <button onClick={props.addTask}>Add Task</button>
            <button>Clear Completed Task</button>
        </form>
    );
}

export default TodoForm;