import React from 'react';

const ToDoForm = props => {
    return (
        <form>
            <input
                onChange = {props.handleTodoChange}
                type = "text"
                name = "todo"
                value = {props.value}
                placeholder = "Enter your Todo List Item here"
            />

            <button onClick={props.handleAddTodoItem}>Add Item</button>
            <button onClick={props.handleClearTodoComplete}>Clear Item</button>
        </form>
    );
};

export default ToDoForm;