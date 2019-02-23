import React from 'react';

const Todo = props => {
    return (
           <div className="bulletContainer">
                <li
                onClick={() => props.changeBool(props.taskIndex)}
                className={props.taskItem.decoration}
                >
                    {props.taskItem.task}
                </li>
           </div>
    )
}

export default Todo;