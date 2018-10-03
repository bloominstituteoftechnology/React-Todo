import React from "react";

const TodoList = props => {
    return (
        <ul>
            {props.todoList.map(item =>
                <li>{item.task}</li>
            )}
        </ul>
    );
};

export default TodoList;