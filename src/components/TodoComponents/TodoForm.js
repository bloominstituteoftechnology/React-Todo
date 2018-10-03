import React from 'react';
import './Todo.css';

const TodoForm = props => { 
    return (
            <form onSubmit={props.addTodoInput}>
                <input type="text" name="newTask" placeholder="...todo" onChange ={props.inputChange} value={props.newTask}></input>
                <button type="submit" onClick={props.addTodoInput}>Add Todo</button>
                <button name>Clear Completed</button>
            </form>
    );
}

export default TodoForm;