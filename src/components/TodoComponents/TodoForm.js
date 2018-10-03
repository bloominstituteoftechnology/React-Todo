import React from "react";

const TodoForm = props => {
    return (
        <form>
            <input type="text" placeholder="Type new to-do item" value={props.text} />
            <button type="submit">Add To-Do</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;