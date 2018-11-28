import React from 'react';

const TodoForm = props => (
    <form>
        <input type='text' 
        value={props.input}
        placeholder='Please Enter a Todo'
        onChange={props.handleChange}
        onKeyDown={(e) => e.keyCode === 13 ? props.addTodo(e) : null}
        />
        <button type='button' onClick={props.addTodo}>Add Todo</button>
        <button type='button' onClick={props.clearComplete}>Clear Completed</button>
    </form>
);

export default TodoForm;