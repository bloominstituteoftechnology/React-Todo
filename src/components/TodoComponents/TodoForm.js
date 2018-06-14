import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input name="todo" value={props.value} onChange={props.handleTodoChange} type="text"/>
            <button
                onClick={props.handleAddTodo}
            >
                Add Todo
            </button>

            <button
                onClick={props.handleClearTodos}
            >
                Clear Completed
            </button>
        </div>
    );
};

export default TodoForm;