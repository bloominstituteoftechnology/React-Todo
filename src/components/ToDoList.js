import React from "react";

const ToDoList = props => {
    return (
        <div>
            
            {props.toDos.map((toDo, index) => (
                <div key={toDo + index}>{toDo}</div>
            ))}
        </div>
    );
};

export default ToDoList;