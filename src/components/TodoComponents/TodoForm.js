import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return(
        <div>
            <form onSubmit={props.addTodo}>
                <input
                    className="addTodo"
                    type="text"
                    name="inputText"
                    placeholder="add a todo"
                    value={props.inputText}
                    onChange={props.handleChange}
                />
                <button type="submit">Add Todo</button>
                <button type="button" onClick={props.clearCompleted}>Clear Completed</button>
            </form>
        </div>
    );
};

export default TodoForm;