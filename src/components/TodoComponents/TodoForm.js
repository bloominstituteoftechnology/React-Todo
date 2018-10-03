import React from "react";

const TodoForm = props => {
    return (
        <form> {/* onSubmit={props.addItem}> */}
            <input 
                type="text" 
                onChange={props.inputChangeHandler} 
                placeholder="Type new to-do item" 
                value={props.text} 
            />
            <button type="submit" onClick={props.addItem}>Add To-Do</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;