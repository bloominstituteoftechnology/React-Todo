import React from 'react';
import './Todo.css';


const TodoForm = (props) => {
    return (
        <form>
            <input placeholder="...todo" onChange={props.messageProp} onSubmit={props.buttonProp} />
            <button onClick={props.buttonProp}>Add Todo</button>
            <button onClick={props.clearProp}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;