import React from 'react';


const TodoForm = props => {
    return (
        <form>
            <input value={props.inputText} onChange={props.handleInput} /> 
            <button onClick={props.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}
// What is value in input?

export default TodoForm;