import React from 'react';

function TodoForm(props){
    return (
        <div className='form-container'>
            <form onSubmit={props.addTask}>
                <input 
                className='form-input-content'
                type="text"
                name='inputText'
                placeholder='...todo'
                value={props.inputText}
                onChange={props.handleChange}
                />
                <button className='button-content' type='submit'>Add Todo</button>
                <button className='button-content' onClick={props.clearCompleted}>Clear Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;