import React from 'react';

const TodoForm = (props) => {
        return(
            <form>
            <input 
            type='text' 
            value={props.newTodo.task} 
            name='task' 
            placeholder='Todo...' 
            onChange={props.change} 
            autocomplete='off' />
            <button onClick={props.submit}>Submit Todo</button>
            <button onClick={props.delete}>Delete Completed</button>
            </form>
        )
    
}

export default TodoForm;