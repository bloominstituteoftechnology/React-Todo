import React from 'react';

function TodoListForm(props) {
    return (
        <form onSubmit={props.addTodo}>
            <input 
                placeholder="...todo"
                value={props.todoListItems}
                onChange={props.handleChanges}
                />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoListForm;