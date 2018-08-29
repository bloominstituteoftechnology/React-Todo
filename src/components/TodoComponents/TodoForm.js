import React from 'react';

function TodoForm(props) {

    return(
        <form>
            <input value={props.inputText} onChange={props.handleInput}></input>
            <button onClick={props.handleTodoClick}>Add Todo</button>
            <button onClick={props.handClearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;