import React from "react";

const ToDoList = props => {
    return (
        <div>
            {props.toDos.map( (task, index) => (
                <div key={task + index}> {task} </div>
            ))}
        </div>
    );
};

export default ToDoList;