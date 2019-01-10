import React from 'react';

function TodoForm(props) {
    // console.log('todo form test');
    return (
        <form onSubmit={props.addTodo}>
            <input
                value={props.task}
                type="text"
                playerholder="add new todo"
                onChange={props.handleChanges}
            />
            <button onClick={props.addTodo} type="submit">Add Todo</button>
        </form>
    )
}
export default TodoForm;