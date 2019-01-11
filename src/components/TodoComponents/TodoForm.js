import React from 'react';

function TodoForm(props) {
    // console.log('todo form test');
    return (
        <form>
            <input
                value={props.newTask}
                type="text"
                name="newTask"
                playerholder="add new todo"
                onChange={props.handleChanges}
            />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clearComplete}>Clear complete</button>
        </form>
    )
}
export default TodoForm;