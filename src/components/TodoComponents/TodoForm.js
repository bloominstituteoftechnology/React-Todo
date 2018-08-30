import React from "react";

function TodoForm(props) {
    return (
        <form>
            <input 
                value={props.inputText} 
                onChange={props.handleInput}
                type="text"
                name="todo"
                placeholder="What to do..." />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;