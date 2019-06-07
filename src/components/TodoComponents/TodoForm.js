import React from "react";

const TodoForm = props => {
    return (
        <form>
            <input 
            type="text"
            placeholder="Add ToDo"
            name="ToDo"
            className="todoinput"
            onChange="text"
            />
            <button onClick={props.addTodo}>Add</button>
            <button onClick={props.clearTodos}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;