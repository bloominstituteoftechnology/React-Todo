import React from 'react';

function TodoForm(props) {
    // console.log('todo form test');
    return (
        <form onSubmit={props.addTodo}>
            <input
                value={props.task}
                type="text"
                name="task"
                playerholder="add new todo"
                onChange={props.handleChanges}
            />
            <button type="submit">Add Todo</button>
            <button onClick={props.clearComplete}>Clear done!</button>
        </form>
    )
}
export default TodoForm;