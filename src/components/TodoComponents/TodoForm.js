import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input value={props.todo} onChange={props.handleInput}/>
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.addTodo}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;