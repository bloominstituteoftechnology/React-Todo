import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addToTodos}>
                <input type="text" name='todoText' placeholder='add to your Todo list here!' value={props.todoText} onChange={props.handleChange}/>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;