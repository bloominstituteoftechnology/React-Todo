// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
    const handleClick = () => {
        props.handleTaskCompleted();
    }
    return (
        <div className="to-do-list">
            {props.tasks.map(task => (
                <ToDo handleTaskToggle ={props.handleTaskToggle} key={task.id} task={task} />
            ))}
            <button onClick={handleClick} className="clear-button">
                Clear list
            </button>
        </div>
    );
};

export default ToDoList;