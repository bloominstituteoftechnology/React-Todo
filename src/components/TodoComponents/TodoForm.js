import React from "react";

const TodoForm = ({ inputValue, submitNewTask, updateInputValue}) => {
    return (
        <div>
            <form onSubmit={submitNewTask}>
                <input 
                placeholder ="...todo"
                value={ inputValue }
                onChange={ updateInputValue }
                />
                <button>Add ToDo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    );
};


export default TodoForm;