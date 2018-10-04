import React from 'react';

const TodoForm = ( props ) => {
    return (
        <form className='todoForm'>
            <input type='text' 
            placeholder='Add a task' 
            onChange={props.changeHandler} 
            value={props.newTask}
            name='newTask'
            className='addTaskInput'/> <br/ >
            <button type='submit' onClick={props.addTask} className='addButton'>Add</button>
            <button type='submit' onClick={props.removeTask} className='removeButton'>Remove</button>
        </form>
    );
}

export default TodoForm;