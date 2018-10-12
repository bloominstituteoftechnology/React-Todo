import React from 'react';

const Todo = props => {

    return(
        <div className="task-item">
            <h1 className={props.todoList.style} key={props.todoList.id}
            onClick={() => {props.completedTask(props.index)}} >
                TASK <span className="task-stamp"> ID: {props.todoList.id}</span>
                    
            </h1>
            <hr   className="line"/>
            <p className="task-txt">
            {props.todoList.task}
            </p>
        </div>
    );
}

export default Todo;