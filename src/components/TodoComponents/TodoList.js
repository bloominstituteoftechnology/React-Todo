// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";


function TodoList(props) {
    console.log(props);
    return <ul>{props.tasklist.map(task => 
        <Todo
            task={task}
            key= {task.id}
            handleComplete={props.handleComplete}
            />
        )}
        </ul>;
}

export default TodoList;