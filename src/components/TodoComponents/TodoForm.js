import React from "react";

const TodoForm = ({ inputValue, submitNewTask, updateInputValue, clearCompleted }) => {
    return (
        <div>
            <form onSubmit={submitNewTask}>
                <input 
                placeholder ="...todo"
                value={inputValue}
                onChange={updateInputValue}
                />
                <button>Add ToDo</button>
                <button onClick={clearCompleted}>Clear Completed</button>
            </form>
        </div>
    );
};


export default TodoForm;