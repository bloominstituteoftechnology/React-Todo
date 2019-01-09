import React from 'react';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.addTodo}>
            <input type='text' name='todo' placeholder='...todo' value={props.todo} onChange={props.handleChanges}/>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;