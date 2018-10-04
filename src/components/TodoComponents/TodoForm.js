import React from 'react';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.addTodo}>
            <input 
                type="text"
                name="todo"
                placeholder="...todo"
                onChange={props.inputChange}
                value={props.value}
            />
            <button type="submit">Add Todo</button>
            <button>Clear Completed</button>
        </form> 
    );
};

export default TodoForm;