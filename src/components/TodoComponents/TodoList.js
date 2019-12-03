// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from "./Todo";


const ToDoList = props => {
    return(
        <div className="task-list">
            {props.toDos.map((toDo) => (
                <ToDo 
                    handleToggleComplete={props.handleToggleComplete}
                    key={toDo.id}
                    toDo={toDo}
                />
            ))}
        </div>
    )
};

export default ToDoList;