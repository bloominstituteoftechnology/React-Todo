import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
        {props.plan.map(todo => (
            <Todo
            toggleTodoDone={props.toggleTodoDone}
            key={todo.id}
            todo={todo}
            />
        ))}
        <button className="clear-btn" onClick={props.clearPurchased}>
            Clear Purchased
        </button>
        </div>
    );
};

export default TodoList;
