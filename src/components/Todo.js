import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <h2>{props.task.task}</h2>
            <p>Completed? {props.task.completed ? "Yes" : "Not yet"}</p>
        </div>
    );

}

export default Todo;
