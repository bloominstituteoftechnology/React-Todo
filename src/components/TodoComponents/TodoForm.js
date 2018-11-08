import React from 'react';

const TodoForm = props => {
    return(
        <form action="">
            <input type="text" onChange={props.change} value={props.inputText}></input>
            <button onClick={props.add}>Add Todo</button>
            <button onClick={props.clear}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;


// `<TodoForm>` will hold your input field and your `Add Todo` 
// and `Clear Completed` buttons.