import React from 'react';

const TodoForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <input placeholder="..todo" value={props.taskText} onChange={props.handleChange} className='todo'/>
            <button className='todoButton' onClick={props.handleSubmit}>Add Todo</button>
            <button className='clearButton'>Clear Completed</button>
        </form>
    )
}

export default TodoForm