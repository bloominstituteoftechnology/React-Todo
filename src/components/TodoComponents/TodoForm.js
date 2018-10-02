import React from 'react';
import './Todo.css';
 const TodoForm = (props) => {
    return (
        <form>
            <input value={props.input} onChange={props.handleInput} />
            <button onClick={props.handleSubmit}>Add todo</button>
            <button>Clear Completed</button>
        </form>
    )
}
 export default TodoForm;                                                           