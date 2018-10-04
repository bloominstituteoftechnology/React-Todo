import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return(
        <form className="todo-form">
            <input 
                type="text"
                name="newTodo"
                value={props.newTodo}
                onChange={props.changeHandler}
                placeholder="Enter todo here"
            />
            <button onClick={props.addTodo}>add todo</button>
            <button onClick={props.clearCompletedTodo}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;