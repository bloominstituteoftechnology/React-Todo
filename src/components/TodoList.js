import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className='shopping-list'>
        {props.plan.map(todo => (
            <Todo
            toggleTodoDone={props.toggleTodoDone}
            key={todo.id}
            todo={todo}
            />
        ))}
        <button className="clear-btn" onClick={props.clearDone}>
            Clear List
        </button>
        </div>
    );
};

export default TodoList;
