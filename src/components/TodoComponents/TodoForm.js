import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <form>
            <div className="inputContainer"> 
                <input className="input"
                    onChange={props.handleToDoChange}
                    type="text"
                    name="todo"
                    value={props.value}
                    placeholder="**ToDo**"
                />
            </div>
            <div className="buttonsContainer">
                <button className="button" onClick={props.handleAddTodo}>Add ToDo</button>
                <button className="button" onClick={props.handleClearTodos}>Clear Completed</button>
            </div>
        </form>
    );
}

export default TodoForm;