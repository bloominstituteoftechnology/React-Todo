import React from "react"

const TodoForm = props=>{
    return (
        <form>
            <input onChange={props.handleTodoChange}
            type="text"
            name="todo"
            value={props.value}
            placeholder="here is the list of todos"/>
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed Todo</button>
           
        </form>
    );
};

export default TodoForm;