import React from 'react';
import './Todo.css';


const TodoForm = props => {

    return (
            <div>
                <input name="message" value={props.message} onChange={props.handleInputChange}></input>
                <button onClick={props.addTodoHandle}>Add Todo</button>
                <button onClick={props.completeTodoHandle}>Clear Completed</button>
            </div>
    );
}


export default TodoForm;