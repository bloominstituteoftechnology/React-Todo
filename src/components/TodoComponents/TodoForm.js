import React from 'react';

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
                <button>Remove Complete</button>
            </form>
        </div>
    )
}

export default TodoForm;