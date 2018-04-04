import React from "react";

const completion = e => {
    e.target.classList.toggle('task--Completed')
}

const removal = e => {
    e.target.parentNode.style.display = 'none';
}

const ToDo = props => {
    return (
        <div>
            {props.toDos.map( (task, index) => (
                <div 
                    onClick={completion} 
                    className="task" 
                    key={task.text + index}> {task.text}
                    <button className="remove" onClick={removal}>X</button> 
                </div>
            ))}
        </div>
    );
};

export default ToDo;