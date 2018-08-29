import React from 'react';

import './Todo.css';

const TodoForm = (props) => {
    return (
        <div>
            <form>
                <input 
                    value = { props.inputText } 
                    onChange = { props.onChangeInput } 
                />
                <button onClick = { props.onAddTodo }>Add Todo</button>
                <button onClick = { props.onClearCompleted }>Clear Completed</button>
                <button onClick = { props.onClearAll }>Clear All</button>
            </form>
        </div>
    );
}

export default TodoForm;
