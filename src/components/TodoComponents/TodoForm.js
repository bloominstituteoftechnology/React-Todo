import React from 'react';

const TodoForm = props => {
    return (
        <div className='form-container'>
            <form onSubmit={props.addTask}>
                <input 
                    type='text'
                    name='inputText'
                    placeholder='...todo'
                    value={props.inputText}
                    onChange={props.handleChange}
                />
                <button type='submit'>Add task</button>
                <button onClick={props.clearComplete}>Clear completed</button>
            </form>
        </div>
    )
}

export default TodoForm;