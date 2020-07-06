import React from "react";

import Todo from "./Todo";

const TodoList = props => {

    return(
        <div className="shopping-list">
            {props.todo.map(item => (
                <Todo toggleItem={props.toggleItem} key={item.id} item={item}/> 
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
               

        </div>
    )
}

export default TodoList;