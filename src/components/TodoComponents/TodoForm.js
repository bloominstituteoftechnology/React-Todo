import React from 'react';

import './Todo.css';

const TodoForm = (props) => {
    return (
            <form className = "todo-form">
                <input 
                    value = { props.inputText } 
                    onChange = { props.onChangeInput } 
                    placeholder = "Enter something to do..."
                />

                <button onClick = { props.onAddTodo }>Add Todo</button>
                <button onClick = { props.onClearCompleted }>Clear Completed</button>
                <button onClick = { props.onClearAll }>Clear All</button>
            </form>
    );
}

export default TodoForm;
