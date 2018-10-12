import React from 'react';

const Todo = props => {
    return(
        <div className="task-item">
            <h1 className={props.todoList.style} key={props.todoList.id}
            onClick={() => {props.completedTask(props.index)}} >
                TASK: {props.todoList.task}
            </h1>
        </div>
    );
}

export default Todo;