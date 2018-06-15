import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <input 
            type="text"
            placeholder="add todo here"
            value={props.newValue}
            onChange={props.addToNewTasks}
            />
            <button onClick={props.addToList}>Add Todo</button>
            <button onClick={props.clearButton}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;