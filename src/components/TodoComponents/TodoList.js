import React from "react";
import ToDoTask from "./Todo";


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div>
        {props.list.map(task => (
            <ToDoTask key={task.id} task={task} toggleTask={props.toggleTask} />
        ))}
            <button onClick={props.deleteTask}>Clear Completed</button>
        </div>
    );
};

export default TodoList;