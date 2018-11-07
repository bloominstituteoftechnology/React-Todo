import React from 'react';

function TodoForm(props){
    return (
        <div>
            <form onSubmit={props.addTask}>
                <input 
                type="text"
                name='inputText'
                placeholder='...todo'
                value={props.inputText}
                onChange={props.handleChange}
                />
                <button type='submit'>Add Todo</button>
                <button type='submit'>Clear Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;