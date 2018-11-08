import React from 'react';
import './todoForm.css';

const TodoForm = props => {
    return (
        <div className='todo-form'>
            <form onSubmit={props.addToTodos}>
                <input 
                    type="text" 
                    name='todoText' 
                    placeholder='add to your Todo list here!' 
                    value={props.todoText} 
                    onChange={props.handleChange}
                />
                <div className='button-container'>
                    <button type='submit'>Add Todo</button>
                    <button onClick={props.clearComplete}>Remove Completed</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;