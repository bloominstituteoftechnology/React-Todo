import React from 'react';

function TodoForm(props) {

    return(
        <form>
            <input value={props.inputText} onChange={props.handleInput}></input>
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleClearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;