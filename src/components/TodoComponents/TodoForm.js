import React from 'react';

//Input field
//Add Todo button
//Clear Completed button

const TodoForm = props => {
    return (
        <div>
            <input 
            type="text"
            name="todoInput"
            placeholder="...todo"
            value={props.inputText}
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;