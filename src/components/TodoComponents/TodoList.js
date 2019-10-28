import React from "react";
import ToDoTask from "./Todo";


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div>
        {props.list.map(task => (
            <ToDoTask key={task.id} task={task} />
        ))}
            <button onClick={props.clearTask}>Clear Task</button>
        </div>
    );
};

export default TodoList;