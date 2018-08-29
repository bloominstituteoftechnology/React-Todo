import React from "react";
import TodoList from "./TodoList";

function TodoForm(props) {
    return (
        <form>
        <input value={props.inputText} onChange={props.handleInput} />
        <button onClick={props.addTodo}>Add to-do</button>
        </form>
    );
}

export default TodoForm;