import React from 'react';

const TodoForm = props => {
    return (
        <form className='todo-form' onSubmit={props.onSubmit}>
            <input value={props.value} onChange={props.onChange} type='text' name='list' placeholder='...todo'></input>
            <button onClick={props.addButton}>Add todo</button>
            <button onClick={props.clearButton }>Clear Completed</button>
        </form>
    );
}

export default TodoForm;