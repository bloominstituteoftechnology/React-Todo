import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.handleTodoChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="Todo.."
            />
            <button onClick={props.handleAddItem}>Add Item</button>
            <button onClick={props.handleClearItems}>Clear</button>
        </form>
    );
};

export default TodoForm;