import React from 'react';


const Todo = props => {
    return (
           <li 
           onClick={() => props.changeBool(props.taskIndex)}
           className={props.taskItem.decoration}
           >
                {props.taskItem.task}
           </li>
    )
}

export default Todo;