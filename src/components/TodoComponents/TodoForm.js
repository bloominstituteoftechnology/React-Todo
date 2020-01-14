import React from 'react';

const TodoForm = props =>  {
    
   return (
    <form onSubmit={props.handleSubmit}>
        <input 
            type='text'
            name='task'
            value={props.todoTask}
            onChange={props.handleChanges}
        />
        <button>Add Task</button>
        <button onClick={props.handleClear}>Clear Completed</button>
        
    </form>
   )
}
export default TodoForm;