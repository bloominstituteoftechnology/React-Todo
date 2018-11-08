import React from 'react';
import './TodoForm.css';

function TodoForm(props){
    return(
        <div className='form'>
            <form onSubmit={props.addTodo}>
                <input
                    type='text'
                    name='inputText'
                    placeholder='add new todo'
                    value={props.inputText}
                    onChange={props.handleChange}
                />
                <button type='submit'>Submit</button>
                <button onClick={props.clearComplete}>Remove Complete</button>
            </form>
        </div>
    )
}

export default TodoForm;