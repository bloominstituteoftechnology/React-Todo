import React from 'react';
import './Todo.css'


const TodoForm = props => {
    return (
        <div className="form-container">
            <form 
            className="todo-form"
            onSubmit={props.addTask}>
                <input
                    className="addInput"
                    type="text"
                    value={props.task}
                    onChange={props.handleChanges}
                    placeholder="...Todo"
                ></input>
                <button className="addButton">Add Todo</button>
                <button className="clearButton">Clear Completed</button>
            </form>
           
        </div>
    );
}

export default TodoForm;