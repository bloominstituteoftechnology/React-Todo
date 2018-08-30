import React from "react";
function Todo(props){
    return (
        <li onClick={() => props.markCompleted(props.todo.id)}>{props.todo.inputText}</li>
    );
}
export default Todo; 