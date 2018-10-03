import React from 'react';

const TodoForm = props => {
    return (
        <form className='form'>
            <input className='input' type="text" value={props.value} onChange={props.handleInput} onSubmit={props.handleClick} placeholder="enter a new to-do" />
            <button className='hide' onClick={props.handleClick}>Add todo</button>
            <button className='button' onClick={props.handleClear}>Clear Completed</button>
        </form>
    )
        
}
 export default TodoForm; 