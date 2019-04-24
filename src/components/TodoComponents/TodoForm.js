import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.what.addTodo}>
            <input 
                type = 'text'
                name = 'todo'
                value = {props.newTodo.task}
                placeholder = 'todo'
                onChange={props.what.handleChanges}
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;