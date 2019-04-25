import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input type="text" name="task" value={props.taskField} onChange={props.handleChange} placeholder="enter todo here .."/>
            <button onClick={props.todo}>Add Todo</button>
            <button>Clear Completed</button>
            
        </form>
     
    );
};

export default TodoForm;
