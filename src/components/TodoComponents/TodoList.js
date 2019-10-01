// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.list.map(item => (
                <Todo 
                key={item.id} 
                item={item} 
                toggleItem={props.toggleList} />
            ))}
            <button className="clear-btn" onClick={props.clearSelected}>
                Clear Selected
            </button>
        </div>
    );
};

export default TodoList;