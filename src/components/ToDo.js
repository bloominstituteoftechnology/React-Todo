import React from "react";

const completion = e => {
    e.target.classList.toggle('task--Completed')
}

const ToDo = props => {
    return (
        <div>
            {props.toDos.map( (task, index) => (
                <div onClick={completion} className="task" key={task + index}> {task} </div>
            ))}
        </div>
    );
};

export default ToDo;