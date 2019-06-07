import React from 'react';

function Todo(props) {
    const clickHandler = () => {
        props.toggleTaskComplete(props.todoTask.id);
    };

    return (
        <div
            className={`task${props.todoTask.completed ? "completed" : ""}`}
            onClick={clickHandler}
        >
            <p>
                {props.todoTask.task}
            </p>
        </div>
    );
};

export default Todo;