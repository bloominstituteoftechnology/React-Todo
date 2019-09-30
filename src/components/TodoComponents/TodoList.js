// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return(
        <div className="todo-list">
            {props.task.map(activity => (
                <Todo key={activity.id} activity={activity} toggleList={props.toggleList}/>
            ))}
            <button className="clear-btn" onClick={props.clearPurchased}>
                Clear List
            </button>
        </div>
    );
};

export default TodoList;