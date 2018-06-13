import React from "react";

const Todo = props => {
    return <div key={Math.random()}>{props.todoData.task}</div>;
}

export default Todo;