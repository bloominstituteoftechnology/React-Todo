import React from 'react';
// import '.Todo.css';

const TodoForm = props =>{
    return(
        <form>
            <input value={props.inputField} onChange={props.messageChangeHandler} />
            <button onClick={props.clickHandler}>Add Todo</button>
            <button onClick={props.clickHandler}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;
