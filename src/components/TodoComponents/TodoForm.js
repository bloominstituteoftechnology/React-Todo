import React from 'react';

const TodoForm = (props) => {
    return (
        <div className='form'>
            <input 
                type='text'
                placeholder='...todo'
                value={props.value}
            />
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </div>
    )
}

export default TodoForm