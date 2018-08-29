import React from "react";

function ToDoForm(props) {
    return (
        <form>
            <input value={props.inputText} onChange={props.handleInput} />
            <button onClick={props.addToDo}>Add To Do</button>
        </form>
    );
}

export default ToDoForm;