import React from "react";

const TodoForm = props => {
    return (
        <form>
            <input 
            type="text"
            placeholder="text"
            name="ToDo"
            className="todoinput"
            onChange="text"
            />
            <button>Add</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;