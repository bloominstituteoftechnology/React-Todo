import React from "react";

const Todo = props => {
    return <li key={Math.random()}>{props.todoData.task}</li>;
}

export default Todo;