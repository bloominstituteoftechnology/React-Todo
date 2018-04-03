import React from "react";
// import ToDo from "./ToDo";

const completion = e => {
    e.target.classList.toggle('task--Completed')
}

const ToDoList = props => {
    return (
        <div>
            {props.toDos.map( (task, index) => (
                <div onClick={completion} className="task" key={task + index}> {task} </div>
            ))}
        </div>
    );
};

export default ToDoList;