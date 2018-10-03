import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    return (
        <ul>
            {props.todoList.map(item =>
                <Todo item={item.task} />
            )}
        </ul>
    );
};

export default TodoList;