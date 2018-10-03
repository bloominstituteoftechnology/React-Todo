import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    return (
        <ul className="main">
            {props.todoList.map((item, i) =>
                <Todo item={item} index={i} toggle={props.toggle} />
            )}
        </ul>
    );
};

export default TodoList;