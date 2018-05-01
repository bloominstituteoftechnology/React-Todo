// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import { ToDo } from "./ToDo";

export const ToDoList = props => {
    return(
        <ul>
            {
                props.toDoTask.map((task, index) => {
                    return( 
                    <ToDo 
                        key= { task.id }
                        toDoTask= { task.task }
                        taskCompleted={ task.completed }
                        handleTaskCompletion={ props.handleTaskCompletion }
                    />
                    )
                })
            }
        </ul>
    );
};