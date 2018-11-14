import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                //basic structure of handlers is onChange = {props.handleCapitalVars}
                onChange = {props.handleTodoChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="...todo" //remember the "..." is expanding out
            />
            <button onClick = {props.handleAddTodo}>Add ToDo</button>
            <button onClick = {props.handleClearTodos}>Clear</button>
        </form>
    )
}

export default TodoForm;