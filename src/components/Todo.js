import React from 'react';

const Todo = (props) => {
    return (
        <div style={{borderStyle: "solid", padding: "15px"}}>
            <h2>{props.task.task}</h2>
            <p>Completed? {props.task.completed ? "Yes" : "Not yet"}</p>
            <button>Mark Completed</button>
        </div>
    );

}

export default Todo;
